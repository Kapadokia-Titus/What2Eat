import Hero from "./hero";

export default function Home({onSearch}){

    return(
        <Hero  query={onSearch}/>
    )
}