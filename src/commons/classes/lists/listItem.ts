class ListItem {
  public name: string;
  public url: string;

  constructor(props: ListItem) {
    this.name = props.name;
    this.url = props.url;
  }
}

export default ListItem;
