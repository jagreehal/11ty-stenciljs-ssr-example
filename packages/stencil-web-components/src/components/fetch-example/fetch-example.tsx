import { Component, Prop, State, h } from "@stencil/core";
const SEARCH = "//api.github.com/search/repositories";

const Result = ({ result }) => {
  return (
    <div class="result">
      <div>
        <a href={result.html_url} target="_blank">
          {result.full_name}
        </a>
        🌟<strong>{result.stargazers_count}</strong>
      </div>
      <p>{result.description}</p>
    </div>
  );
};

@Component({
  tag: "fetch-example"
})
export class FetchExample {
  @Prop() q: string = "stencil";
  @State() results: any[] = [];

  componentDidLoad() {
    fetch(`${SEARCH}?q=${this.q}`)
      .then(r => r.json())
      .then(json => {
        this.results = (json && json.items) || [];
      });
  }

  render() {
    return (
      <div>
        <div class="list">
          {this.results.map(result => (
            <Result result={result} />
          ))}
        </div>
      </div>
    );
  }
}
