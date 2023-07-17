import Link from "next/link";
import { projectsObj } from "../../projects";
import Image from 'next/image'


export default function Projects(){

    return(
        <main className="container mx-auto">
            <h1 className="text-center text-4xl font-bold m-10">Projects</h1>
            <div className="container pb-32 pt-20 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
                {projectsObj.map( ({id, text, imgUrl}) => (
                    
                    <div className=" rounded-xl bg-slate-700 text-white">
                        <Link key={id} href={`/project/${id}`}>
                            <Image
                                alt=""
                                src={imgUrl}
                                height={500}
                                width={500}
                                className="rounded-xl w-full h-52 object-cover aspect-square"
                                />
                        </Link>
                        <p className=" p-4">
                        {text}
                        </p>
                    </div>
                ))}
               
            </div>
        </main>
    )
}