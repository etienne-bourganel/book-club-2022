const Grades = ({ antonGrade, willeGrade, etienneGrade }) => {
  return (
    <div>
      <div>Anton: {antonGrade ? antonGrade : '?'}</div>
      <div>Wille: {willeGrade ? willeGrade : '?'}</div>
      <div>Etienne: {etienneGrade ? etienneGrade : '?'}</div>
    </div>
  )
}

export default Grades
