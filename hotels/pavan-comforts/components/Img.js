import Image from "next/image";
export default function Img({ src, alt, className = "", sizes = "(max-width:768px) 100vw, 50vw", priority = false }) {
  return (<div className={"ph " + className}><Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} /></div>);
}
