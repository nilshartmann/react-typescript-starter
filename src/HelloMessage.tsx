import * as React from "react";

interface HelloMessageProps {
  greeting?: string;
}

interface HelloMessageState {
  greeting: string;
}

export default class HelloMessage extends React.Component<HelloMessageProps, HelloMessageState> {
  input: HTMLInputElement | null;

  constructor(props: HelloMessageProps) {
    super(props);
    this.state = { greeting: this.props.greeting || "" };
  }

  render() {
    return (
      <div>
        <input ref={input => (this.input = input)} onChange={event => this.updateModel(event)} value={this.state.greeting} />
        <p>{this.state.greeting}, World</p>
        <button onClick={() => this.reset()}>Clear</button>
      </div>
    );
  }

  reset() {
    this.setState({ greeting: "" });
    this.input && this.input.focus();
  }

  updateModel(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ greeting: event.target.value });
  }
}
