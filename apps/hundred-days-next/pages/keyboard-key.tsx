import { useEffect, useState } from 'react';
import { Layout } from "layouts";

type IKeyProps = {
  text: string;
  size: 'normal' | 'shift' | 'tab' | 'enter';
  sideText?: string;
}

function CapFirst(word: string): string {
  return word.split("").map((x, idx) => {
    if (idx === 0) {
      return x.toUpperCase()
    } else {
      return x
    }
  }).join("")
}

export function Index() {
  const [size, setSize] = useState<IKeyProps['size']>("normal")
  const [text, setText] = useState("");
  useEffect(() => {
    if (size === 'normal') {
      setText("Q")
    } else {
      setText(size)
    }
  }, [size])
  return <Layout title="Key">
    <div className="w-full h-full flex flex-col justify-center items-center">
      <span>Tap the Key</span>
      <Key data={{
        text: text,
        size: size,
      }}></Key>
      <div className="flex flex-col mt-4 border">
        <select name="size" value={size} onChange={(e) => setSize(e.target.value as IKeyProps['size'])}>
          <option value="normal">normal</option>
          <option value="shift">shift</option>
          <option value="tab">tab</option>
          <option value="enter">enter</option>
        </select>

      </div>
    </div>
  </Layout>
};

const Key = ({ data }: { data: IKeyProps }) => {
  const [isMouseDown, setMouseDown] = useState(false)
  const { text, size } = data;
  const getSize = (size) => {
    let res = ''
    switch (size) {
      case 'normal':
        res = 'w-16 h-16'
        break;
      case 'shift':
        res = 'w-48 h-16'
        break;
      case 'tab':
        res = 'w-24 h-16'
        break;
      case 'enter':
        res = 'w-32 h-16'
        break;

      default:
        res = 'w-16 h-16'
        break;
    }
    return res;
  }
  const handleMouseDown = () => {
    setMouseDown(true)
  }
  const handleMouseUp = () => {
    setMouseDown(false)
  }
  return (
    <div
      className={`${getSize(size)} ${isMouseDown ? 'scale-95' : ''} m-2 flex justify-center items-center border rounded cursor-pointer`}
      style={{
        borderWidth: "3px 7px 10px",
        borderColor: "#ece8e4 #dedad6 #c9c4c4",
        backgroundColor: "#d3cfcc"
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span
        className={`font-mono text-xl w-full h-full flex justify-center items-center`}
        style={{
          background: "linear-gradient(to right, #e5e2e1, #f5f3f1, #e5e2e1)",
          boxShadow: "0 0 10px rgb(0 0 0 / 15%)"
        }}>
        <span className={`${isMouseDown ? 'scale-105' : ''}`}>{CapFirst(text)}</span>
      </span>
    </div >
  )
}

export default Index;
