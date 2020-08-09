import prospect from './main';

export default async function cli(args) {
  await prospect(...args.slice(2));
}
