export const serverFetch = async <T>(path: string, options?: RequestInit): Promise<T | undefined> => {
	
	try {
		let response = await fetch(path, options)
		if (response.ok) {
			return await response.json()
		}
	} catch (err) {
		console.error(err)
		return undefined
	}
	
}
