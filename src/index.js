// 実験用。デプロイされた版の「刻印」をそのまま返す。
// Workers Builds が動いたかは、この文字列が新しくなったかで分かる。
import stamp from './stamp.txt';

export default {
  async fetch() {
    return new Response(stamp, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
  },
};
