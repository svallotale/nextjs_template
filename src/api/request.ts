import ky from "ky";

export const apiBase = ky.create({
	prefixUrl: 'https://jsonplaceholder.typicode.com'
})


