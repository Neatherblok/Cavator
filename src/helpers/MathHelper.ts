class MathHelper {
    //generates a random number
    public static randomNumber(min: number, max: number): number {
        return Math.round(Math.random()*(max-min)+min);
    }
}