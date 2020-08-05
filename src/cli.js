import { prospect } from './main'

export async function cli(args) {
    await prospect(...args.slice(2));
}
