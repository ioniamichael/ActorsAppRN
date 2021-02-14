import axios from "axios";

const API_KEY = '35689b99668862f43e7564605f089bc7';
const BASE_URL = 'https://api.themoviedb.org/3'

export default axios.create({
    baseURL: BASE_URL,
})




// export const fetchAllActors = () => {
//     return [
//         {
//             actorName: 'Jenifer Aniston',
//             actorAge: 50,
//             actorImage: 'https://upload.wikimedia.org/wikipedia/commons/1/16/JenniferAnistonHWoFFeb2012.jpg'
//         },
//         {
//             actorName: 'Bred Pit',
//             actorAge: 46,
//             actorImage: 'https://resizer.mail.ru/p/80f99e9e-680d-598a-9082-246fe9ecb98a/AAAC8W10xLGAstZSDlunrng4zjyUNEtcbob2XUlBn3fs8PUzR2Sm3j0pChWWCb9wOgDqzWtz2n3sq4gQPoMHcmOcaDY.jpg'
//         },
//     ]
// }

