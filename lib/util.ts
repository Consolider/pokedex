export function CapitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// New function
export const GenerateRandomId = (): number => {
  return Math.floor(Math.random() * 1000) + 1
}

// Old function
export function GetRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//const randomInt = getRandomInt(1, 1000);