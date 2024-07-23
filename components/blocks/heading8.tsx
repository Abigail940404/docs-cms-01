import { key } from "@/lib/utils";
import { Item, TextStyle, Element } from "./common";
import { Anchor } from "./anchor";

export interface Heading8 extends Item {
  block_type: 10;
  heading8: {
    elements: Array<Element>;
    style: TextStyle;
  };
}

export function Heading8(props: Heading8) {
  const anchor = props.slugger.slug(
    props.heading8.elements.map((i) => i.text_run.content).join(" ")
  );

  return (
    <h6 className="text-base font-semibold tracking-tight" id={anchor}>
      {props.heading8.elements.map((i) => (
        <Element key={key()} {...i} />
      ))}
      <Anchor anchor={anchor} />
    </h6>
  );
}
