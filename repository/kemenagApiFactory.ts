import HttpFactory from "./factory";
import { type $Fetch } from "ofetch";

class KemenagApiFactory extends HttpFactory {
  constructor(fetcher: $Fetch) {
    super(fetcher);
  }
}

export default KemenagApiFactory;
