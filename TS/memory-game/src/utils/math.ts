
export function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j] as T, arr[i] as T];
    }
    return arr;
}

export function getRandomSubarray<T>(array: T[], size: number): T[] {
    const shuffled = shuffleArray(array);
    return shuffled.slice(0, size);
}
