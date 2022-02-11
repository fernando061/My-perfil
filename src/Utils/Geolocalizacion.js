

const ObtenerUbicacion = () =>{
Option ={
    enableHighAccuracy:true,
    timeout:5000,
    maximumAge:0
}
    const success = (position) =>{
        console.log(position)
    }
    const error = (err)=>{
        console.log(err)
    }
    const rpta = navigator.geolocation.getCurrentPosition(success,error,Option);

    console.log(rpta)

}
export{
    ObtenerUbicacion
}
