import {fetchJson} from './app_dispatcher';
export async function getRetros() {
  let retros;

  retros = await fetchJson( '/retros');
  this.$store.refine('retros').set(retros);
}