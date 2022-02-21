const url = 'https://rickandmortyapi.com/api';

const FetchData = async (url) => {
    try {
        const res = await fetch(url);
        const json = await res.json(); 
        console.log(json);
        return json;
    } catch(error) {
        throw new Error("Somesing wrong");
    };
};

export const GetAllCharacters = async () => await  FetchData(`${url}/character`);




