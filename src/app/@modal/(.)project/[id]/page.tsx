import Image from "next/image"
import { Project, projectsObj } from "../../../../projects"
import Modal from "../../../../components/modal/Modal"

type IProps = {
    params: { id: string }
}

export default function ProjectModal({ params: { id } }:IProps) {

  const idProject: Project = projectsObj.find((p) => p.id === id)!
  return (
    
    <Modal>
        <Image
            alt=""
            src={idProject.imgUrl}
            height={600}
            width={600}
            className="w-full object-cover aspect-square col-span-2"
            />
        <div className="bg-white p-4 px-6">
            <h3>ID: {idProject.id}</h3>
            <p>{idProject.text}</p>
        </div>
    </Modal>
    
  )
}
