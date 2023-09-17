import axios from 'axios';
const authEndpoint="https://accounts.spotify.com/authorize?";
const clientID="5f53d0a5da6846babe89b58a75a8082c";
const redirectUri="http://bhargavasai9999.github.io/spotify";
const Scope=['user-read-private user-top-read','user-read-currently-playing',' playlist-modify-public',' playlist-modify-private ','playlist-read-collaborative ','user-read-play-history',"user-read-Playback-state","user-library-read","playlist-read-private"];
export const loginEndpoint=`${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&Scope=${Scope.join("%20")}&response_type=token&show_dialog=true`;

const apiClient=axios.create({
    baseURL:"https://api.spotify.com/v1/",

});
export const setClientToken= (token) =>{
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization="Bearer "+token;
        return config;
        

        
    });
    
}
export default apiClient;