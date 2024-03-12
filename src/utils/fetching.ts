const prefix = 'http://localhost:5000/api/v1/'

export const getData = async (url: string): Promise<any> => {
    const response = await fetch(`${prefix}${url}`);
    const data = await response.json();
    return data;
};

export const deleteData = async (url: string) => {
   return await fetch(`${prefix}${url}`, {method: 'delete'})
};

