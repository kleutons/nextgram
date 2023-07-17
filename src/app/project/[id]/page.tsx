'use client'
import Image from "next/image"
import { projectsObj, Project } from "../../../projects"
import { useRouter } from 'next/navigation'

type IProps = {
    params: { id: string }
}
export default function ProjectPage({ params: { id } }:IProps){

    const router = useRouter()

    const idProject: Project = projectsObj.find((p) => p.id === id)!

    return(
        <div className="container mx-auto my-10">
            <h1 className="text-black text-2xl font-bold mb-5">
            <button onClick={() => router.push('/projects')}>
              {'<'} Back Projects
            </button>
            </h1>

            <div className="w-1/2 mx-auto border border-gray-700">
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
            </div>
        </div>
    )
}
