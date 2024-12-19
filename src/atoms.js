import { atom, selector } from "recoil";


//-------------------for getting default values from backend-----------

export const networkAtom = atom({
    key: "networkAtom",
    default: selector({
        key:"networkAtomSelector",
        get: async ()=>{
            const res = await axios.get("https://sum-server.1000.com/notification")
            return res.data
        }
    })
})
//------------------------------
export const jobsAtom = atom({
    key:"jobsAtom",
    default: 2
})

export const messagesAtom = atom({
    key: "messagesAtom",
    default: 3
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 4
})

export const totalNotifcationselector = selector({
    key:"totalnotifciationselector",
    get: ({get}) =>{
       const network= get(networkAtom)
       const notification = get(notificationAtom)
       const jobs = get(jobsAtom)
       const messages = get(messagesAtom)
       
       const total = network + notification+ jobs+ messages
      return total
       
    }
})

// ---------------------------------------------
//     export const totalCount = atom({
//       key:"totalCount",
//     default :{
//     network : 1
//     jobs : 2
//     notification :3
//     messages :4  
//     }})


// export const totacount = selector({
//     key:"totalcount",
//     get:({get})=>{
//         const count = get(totalCount)

//         return count.messages + count.jobs + count.network + count.notification
//     }
// })