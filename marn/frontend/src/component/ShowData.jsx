import axios from "axios"
import { useEffect, useState } from "react"

export default function ShowData() {
    let [user,setUSer]=useState([])

    useEffect(()=>{
        Datalao()
    }, [])

    async function Datalao() {
        axios.get("http://localhost:4001/lala/Read",{
     
           
          }).then((a)=>{
         console.log(a.data)
         setUSer(a.data)
          }).catch((e)=>{
            console.log(e.message)
          })
        } 

        return (
            <div>
                <h1>Users Record</h1>
                <div className="row">
                    { user.map((i)=>(
                        <div className="col-md-3">
                            <h4 class="card title">{i.name}</h4>
                            <p class="card-text">{i.email}</p>
                        </div>
                    ))}
                </div>
            </div>
          )


    }

  
    