import './index.css'

const ProjectShowcase = props => {
  const {projects} = props
  const {imageUrl, name} = projects
  return (
    <li>
      <img src={imageUrl} alt={name} className="project-image" />
      <p className="project-name">{name}</p>
    </li>
  )
}
export default ProjectShowcase
