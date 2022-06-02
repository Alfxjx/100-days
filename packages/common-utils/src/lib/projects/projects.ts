export type Project = {
  name: string;
  link: string;
  tag: 'next' | 'vue'
}

export const computedIndex = index => {
  if (index < 9) {
    return `00${index + 1}`
  }
  if (index < 99) {
    return `0${index + 1}`
  }
  return `${index + 1}`
}

export const projects: Project[] = [
  {
    name: 'Key',
    link: 'keyboard-key',
    tag: "next"
  },
  {
    name: 'Bean',
    link: 'coffee-bean',
    tag: 'next'
  },
]

export const nextProjects = projects.filter(x => x.tag === "next")
export const vueProjects = projects.filter(x => x.tag === "vue")