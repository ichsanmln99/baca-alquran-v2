import HttpFactory from "./factory";
import { type $Fetch } from "ofetch";

class QuranApiFactory extends HttpFactory {
  protected language: string = "id";

  constructor(fetcher: $Fetch, language?: string) {
    super(fetcher);

    if (language) this.language = language;
  }
}

export default QuranApiFactory;
