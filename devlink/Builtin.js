import * as React from "react";

export function Block({ tag = "div", ...props }) {
  return React.createElement(tag, props);
}

export function Span(props) {
  return React.createElement("span", props);
}

export function Heading({ tag = "h1", ...props }) {
  return React.createElement(tag, props);
}

export function Link({
  link = { mode: "external", url: "#" },
  className = "",
  button = false,
  ...props
}) {
  if (button) {
    className += " w-button";
  }
  return React.createElement("a", {
    href: link.url,
    className,
    ...props,
  });
}

export function DOM({ tag, attributes = {}, children, ...props }) {
  return React.createElement(
    tag,
    {
      ...props,
      ...attributes.reduce(
        (memo, { name, value }) => ({ ...memo, [name]: value }),
        {}
      ),
    },
    children
  );
}

export function Strong(props) {
  return React.createElement("strong", props);
}

export function FormWrapper({ className = "", ...props }) {
  return React.createElement("div", {
    className: className + " w-form",
    ...props,
  });
}

export function FormForm({ form: _ignored, ...props }) {
  return React.createElement("form", props);
}

export function FormBlockLabel({ form: _ignored, ...props }) {
  return React.createElement("label", props);
}

export function FormTextInput({ form: _ignored, className = "", ...props }) {
  return React.createElement("input", {
    type: "text",
    className: className + " w-input",
    ...props,
  });
}

export function FormButton({ form: _ignored, className = "", ...props }) {
  return React.createElement("input", {
    type: "submit",
    value: props.value ?? "",
    className: className + " w-button",
    ...props,
  });
}

export function FormSuccessMessage({ className = "", ...props }) {
  // TODO: set "display: block;" on form success
  return React.createElement("div", {
    className: className + " w-form-done",
    ...props,
  });
}

export function FormErrorMessage({ className = "", ...props }) {
  // TODO: set "display: block;" on form error
  return React.createElement("div", {
    className: className + " w-form-fail",
    ...props,
  });
}

function hasValue(str) {
  if (typeof str !== "string") return false;
  //   is &nbsp
  return str.replace(/^[s ]+|[s ]+$/g, "").length > 0;
}

export function FormSelect({ form, className = "", ...props }) {
  return React.createElement(
    "select",
    { className: className + " w-select", ...props },
    form.opts.map(({ v, t }, index) =>
      React.createElement(
        "option",
        { key: index, value: hasValue(v) ? v : "" },
        hasValue(t) ? t : ""
      )
    )
  );
}

export function List({ tag = "ul", list, className = "", ...props }) {
  return React.createElement(tag, {
    role: "list",
    className: className + (list.unstyled ? " w-list-unstyled" : ""),
    ...props,
  });
}

export function ListItem(props) {
  return React.createElement("li", props);
}

export function Paragraph(props) {
  return React.createElement("p", props);
}

export function Image({ img, ...props }) {
  return React.createElement("img", { ...props, src: img.src ?? props.src });
}

export function Section({ tag = "section", ...props }) {
  return React.createElement(tag, props);
}

export function Container({ tag = "div", className = "", ...props }) {
  return React.createElement(tag, {
    className: className + " w-container",
    ...props,
  });
}

export function HtmlEmbed({ tag = "div", className = "", value, ...props }) {
  return React.createElement(tag, {
    className: className + " w-embed",
    dangerouslySetInnerHTML: { __html: value },
    ...props,
  });
}

export function Grid({ tag = "div", className = "", ...props }) {
  return React.createElement(tag, {
    className: className + " w-layout-grid",
    ...props,
  });
}

export function Icon({ widget, className = "", ...props }) {
  return React.createElement("div", {
    className: className + ` w-icon-${widget.icon}`,
    ...props,
  });
}

export function DropdownWrapper({
  tag = "div",
  className = "",
  children,
  dropdown,
  ...props
}) {
  const [open, setOpen] = React.useState(false);

  return React.createElement(
    tag,
    {
      className: className + " w-dropdown",
      ...props,
    },
    React.Children.map(children, (child) => {
      if (child.type.name === "DropdownToggle") {
        return React.cloneElement(child, {
          ...child.props,
          onClick: () => setOpen(!open),
        });
      }

      if (child.type.name === "DropdownList") {
        return React.cloneElement(child, {
          ...child.props,
          open,
        });
      }

      return child;
    })
  );
}

export function DropdownToggle({
  tag = "div",
  className = "",
  dropdown,
  ...props
}) {
  return React.createElement(tag, {
    className: className + " w-dropdown-toggle",
    ...props,
  });
}

export function DropdownList({
  tag = "nav",
  className = "",
  open,
  dropdown,
  ...props
}) {
  return React.createElement(tag, {
    className: className + " w-dropdown-list" + (open ? " w--open" : ""),
    ...props,
  });
}

export function DropdownLink({ className = "", dropdown, ...props }) {
  return React.createElement(Link, {
    className: className + " w-dropdown-link",
    ...props,
  });
}

export function Column({
  tag = "div",
  className = "",
  columnClasses = "",
  grid: _ignored,
  ...props
}) {
  return React.createElement(tag, {
    className: className + " w-col " + columnClasses,
    ...props,
  });
}

const transformWidths = (width, index) => {
  const widths = width?.split("|") ?? [];

  return widths.length > 1 ? widths[index] : width;
};

const columnClass = (width, key) => {
  if (/stack$/.test(width)) return "w-col-stack";

  if (/main$/.test(key)) return `w-col-${width}`;

  return `w-col-${key}-${width}`;
};

export function Row({ tag = "div", grid, className = "", children, ...props }) {
  return React.createElement(
    tag,
    { className: className + " w-row", ...props },
    grid
      ? React.Children.map(children, (child, index) => {
          if (child.type !== Column) return child;

          const columnClasses = Object.entries(grid.cols ?? {}).reduce(
            (acc, [key, value]) => {
              const width = transformWidths(
                value === "custom" ? "6|6" : value,
                index
              );

              acc.add(width ? columnClass(width, key) : "");

              return acc;
            },
            new Set()
          );

          return React.cloneElement(child, {
            columnClasses: [...columnClasses].join(" "),
            ...child.props,
          });
        })
      : children
  );
}

export function NavbarWrapper({ className = "", ...props }) {
  return React.createElement("div", {
    className: className + " w-nav",
    ...props,
  });
}

export function NavbarBrand({ className = "", ...props }) {
  return React.createElement(Link, {
    className: className + " w-nav-brand",
    ...props,
  });
}

export function NavbarMenu({ className = "", ...props }) {
  return React.createElement("nav", {
    className: className + " w-nav-menu",
    ...props,
  });
}

export function NavbarButton({ className = "", ...props }) {
  return React.createElement("div", {
    className: className + " w-nav-button",
    ...props,
  });
}

export function SearchForm({ form: _ignored, ...props }) {
  return React.createElement("form", props);
}

export function SearchInput({ form: _ignored, className = "", ...props }) {
  return React.createElement("input", {
    type: "text",
    className: className + " w-input",
    ...props,
  });
}

export function SearchButton({ form: _ignored, className = "", ...props }) {
  return React.createElement("input", {
    type: "submit",
    value: props.value ?? "",
    className: className + " w-button",
    ...props,
  });
}

export function RichText({ tag = "", className = "", ...props }) {
  return React.createElement(tag, {
    className: className + " w-richtext",
    ...props,
  });
}
