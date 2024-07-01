import styles from './ProjectsStyles.module.css';
import iNotebook from '../../assets/iNotebook.png';
import News from '../../assets/News.png';
import UsersManagment from '../../assets/Users Managment.png';
import TextUtils from '../../assets/TextUtils.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={iNotebook}
          link="https://github.com/pjayesh504/notebook-app"
          h3="iNotebook"
          p="Data Storing App"
        />
        <ProjectCard
          src={News}
          link="https://github.com/pjayesh504/News-App"
          h3="News App"
          p="Daily News App"
        />
        <ProjectCard
          src={UsersManagment}
          link="https://github.com/pjayesh504/CRUD-Operation"
          h3="Users Managment"
          p="Administration App"
        />
        <ProjectCard
          src={TextUtils}
          link="https://github.com/pjayesh504/TextUtils-App"
          h3="Text Utils"
          p="Text Editor App"
        />
      </div>
    </section>
  );
}

export default Projects;
