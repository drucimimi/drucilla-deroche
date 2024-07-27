import * as React from 'react'
import styles from '@/app/ui/styles/skill.module.css'

interface  SkillProps {
  name:string
}

const Skill: React.FunctionComponent<SkillProps> = ({name}) => {
  return <span className={styles.skill}>
    {name}
  </span>
}
export default Skill