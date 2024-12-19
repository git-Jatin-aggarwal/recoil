import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 1
})

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