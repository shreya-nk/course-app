 // import stuff
import { LitElement, html, css } from 'lit';

export class TvChannel extends LitElement {
  // defaults
  constructor() {
    super();
    this.title = '';
    this.presenter = '';
    this.topics = [
      
        { title: "Topic 1", content: "Content for Topic 1" },
        { title: "Topic 2", content: "Content for Topic 2" },
        { title: "Topic 3", content: "Content for Topic 3" },
        { title: "Topic 4", content: "Content for Topic 4" },
        { title: "Topic 5", content: "Content for Topic 5" },
        { title: "Topic 6", content: "Content for Topic 6" },
        { title: "Topic 7", content: "Content for Topic 7" },
        { title: "Topic 8", content: "Content for Topic 8" },
        { title: "Topic 9", content: "Content for Topic 9" },
        { title: "Topic 10", content: "Content for Topic 10" }
      ]
    
  }
  // convention I enjoy using to define the tag's name
  static get tag() {
    return 'tv-channel';
  }
  // LitElement convention so we update render() when values change
  static get properties() {
    return {
      title: { type: String },
      presenter: { type: String },
      topics: { type: Array}
    };
  }
  // LitElement convention for applying styles JUST to our element
  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .wrapper {
        padding: 16px;
        background-color: #eeeeee;
      }
    `;
  }
  // LitElement rendering template of your element
  render() {
    return html`
      <div class="wrapper">
       
      </div>  
      `;
  }
}
// tell the browser about our tag and class it should run when it sees it
customElements.define(TvChannel.tag, TvChannel);

// activeClick