import React, { useEffect, useState } from "react";


interface DetailedWriteupProps {
    slug: string,
    onBack: ()=> void
}

export const  DetailedWriteup:React.FC<DetailedWriteupProps> = ({slug, onBack}) => {
    
    const [post, setPost] = useState('');
    useEffect( () => {
         fetch(`../../../public/contents/writeup/${slug}.md`)
                     .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            
   
    },[slug])
    console.log(post);
    return(
        <div className="p-6 font-mono">
            <button onClick={onBack} className="underline mb-4">back</button>
            {/* <h1 className="text-2xl font-semibold mb-4">{data.title}</h1> */}
            <div>{post}</div>
        </div> 
    )
}

