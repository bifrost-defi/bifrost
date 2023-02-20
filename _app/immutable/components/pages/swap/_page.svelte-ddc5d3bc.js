import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, I as append_hydration, C as noop, U as src_url_equal, M as listen, f as transition_in, E as run_all, Q as component_subscribe, V as svg_element, W as claim_svg_element, u as set_data, R as add_render_callback, T as create_in_transition, x as create_component, y as claim_component, z as mount_component, t as transition_out, d as check_outros, N as create_out_transition, A as destroy_component, o as onMount, g as group_outros } from "../../../chunks/index-59ec0738.js";
import { p as page } from "../../../chunks/stores-c729a32f.js";
import { C as CoinSelect, c as coins, A as Arrows, s as send, r as receive } from "../../../chunks/pages.crossfade-0eb72eee.js";
import { w as writable } from "../../../chunks/paths-95a23751.js";
import { B as BigNumber, E as Ethereum, T as Tezos, g as getDefaultExportFromCjs, b as TON } from "../../../chunks/bignumber-6871c801.js";
import { a as fade$1 } from "../../../chunks/index-aa5a0dd9.js";
const ArrowRight = "" + new URL("../../../assets/arrowRight-47960979.svg", import.meta.url).href;
function create_else_block$3(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("DOWN");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "DOWN");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "badge badge-error");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$4(ctx) {
  let div2;
  let div0;
  let a;
  let t0;
  let t1;
  let div1;
  let p;
  let t2;
  let t3;
  function select_block_type(ctx2, dirty) {
    return create_else_block$3;
  }
  let current_block_type = select_block_type();
  let if_block = current_block_type(ctx);
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      a = element("a");
      t0 = text("👾 Bifrost");
      t1 = space();
      div1 = element("div");
      p = element("p");
      t2 = text("Heimdallr");
      t3 = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", { class: true, href: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, "👾 Bifrost");
      a_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true, "data-tip": true });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Heimdallr");
      p_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "class", "btn btn-ghost normal-case text-2xl");
      attr(a, "href", "/");
      attr(div0, "class", "flex-1");
      attr(div1, "class", "tooltip tooltip-left flex flex-row gap-3");
      attr(div1, "data-tip", "Heimdallr is our oracle. It helps to perform cross-chain operations");
      attr(div2, "class", "navbar bg-base-100 px-5");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, a);
      append_hydration(a, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, p);
      append_hydration(p, t2);
      append_hydration(div1, t3);
      if_block.m(div1, null);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      if_block.d();
    }
  };
}
class Header extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$4, safe_not_equal, {});
  }
}
const shortAccountString = (first, last, str) => {
  return str.substring(0, first) + "..." + str.substring(str.length - last);
};
const bigIntToFloat = (number, decimals, precision) => {
  return new BigNumber(number).div(new BigNumber(10).pow(decimals)).toFixed(precision);
};
const MetamaskLogo = "" + new URL("../../../assets/metamask_logo-b137a78b.png", import.meta.url).href;
function create_else_block$2(ctx) {
  let label;
  let t_value = shortAccountString(
    10,
    5,
    /*$address*/
    ctx[4] ?? ""
  ) + "";
  let t;
  return {
    c() {
      label = element("label");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      t = claim_text(label_nodes, t_value);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label, "for", "disconnect-modal-eth");
      attr(label, "class", "btn btn-sm btn-secondary");
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*$address*/
      16 && t_value !== (t_value = shortAccountString(
        10,
        5,
        /*$address*/
        ctx2[4] ?? ""
      ) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(label);
    }
  };
}
function create_if_block_1$2(ctx) {
  let label;
  let t;
  return {
    c() {
      label = element("label");
      t = text("Connect Wallet");
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      t = claim_text(label_nodes, "Connect Wallet");
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label, "for", "connect-modal-eth");
      attr(label, "class", "btn btn-sm btn-secondary");
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(label);
    }
  };
}
function create_if_block$3(ctx) {
  let div1;
  let div0;
  let svg;
  let path;
  let t0;
  let span;
  let t1;
  let div1_intro;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      t0 = space();
      span = element("span");
      t1 = text(
        /*errorMessage*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      svg = claim_svg_element(div0_nodes, "svg", {
        xmlns: true,
        class: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      t0 = claim_space(div0_nodes);
      span = claim_element(div0_nodes, "SPAN", {});
      var span_nodes = children(span);
      t1 = claim_text(
        span_nodes,
        /*errorMessage*/
        ctx[0]
      );
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "stroke-width", "2");
      attr(path, "d", "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "stroke-current flex-shrink-0 h-6 w-6");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(div1, "class", "alert alert-error shadow-lg");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, svg);
      append_hydration(svg, path);
      append_hydration(div0, t0);
      append_hydration(div0, span);
      append_hydration(span, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*errorMessage*/
      1)
        set_data(
          t1,
          /*errorMessage*/
          ctx2[0]
        );
    },
    i(local) {
      if (!div1_intro) {
        add_render_callback(() => {
          div1_intro = create_in_transition(div1, fade$1, {});
          div1_intro.start();
        });
      }
    },
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_fragment$3(ctx) {
  let div0;
  let t0;
  let input0;
  let t1;
  let div3;
  let div2;
  let h30;
  let t2;
  let t3;
  let label0;
  let t4;
  let t5;
  let div1;
  let button0;
  let img;
  let img_src_value;
  let t6;
  let t7;
  let t8;
  let input1;
  let t9;
  let div6;
  let div5;
  let h31;
  let t10;
  let t11;
  let label1;
  let t12;
  let t13;
  let div4;
  let button1;
  let t14;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (!/*$connected*/
    ctx2[3])
      return create_if_block_1$2;
    return create_else_block$2;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*errorMessage*/
    ctx[0] !== "" && create_if_block$3(ctx)
  );
  return {
    c() {
      div0 = element("div");
      if_block0.c();
      t0 = space();
      input0 = element("input");
      t1 = space();
      div3 = element("div");
      div2 = element("div");
      h30 = element("h3");
      t2 = text("Connect wallet");
      t3 = space();
      label0 = element("label");
      t4 = text("✕");
      t5 = space();
      div1 = element("div");
      button0 = element("button");
      img = element("img");
      t6 = text("\n				MetaMask");
      t7 = space();
      if (if_block1)
        if_block1.c();
      t8 = space();
      input1 = element("input");
      t9 = space();
      div6 = element("div");
      div5 = element("div");
      h31 = element("h3");
      t10 = text("You are going to disconnect");
      t11 = space();
      label1 = element("label");
      t12 = text("✕");
      t13 = space();
      div4 = element("div");
      button1 = element("button");
      t14 = text("Disconnect");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", {});
      var div0_nodes = children(div0);
      if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(nodes);
      input0 = claim_element(nodes, "INPUT", { type: true, id: true, class: true });
      t1 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h30 = claim_element(div2_nodes, "H3", { class: true });
      var h30_nodes = children(h30);
      t2 = claim_text(h30_nodes, "Connect wallet");
      h30_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      label0 = claim_element(div2_nodes, "LABEL", { for: true, class: true });
      var label0_nodes = children(label0);
      t4 = claim_text(label0_nodes, "✕");
      label0_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button0 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      img = claim_element(button0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t6 = claim_text(button0_nodes, "\n				MetaMask");
      button0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t7 = claim_space(div2_nodes);
      if (if_block1)
        if_block1.l(div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t8 = claim_space(nodes);
      input1 = claim_element(nodes, "INPUT", { type: true, id: true, class: true });
      t9 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      h31 = claim_element(div5_nodes, "H3", { class: true });
      var h31_nodes = children(h31);
      t10 = claim_text(h31_nodes, "You are going to disconnect");
      h31_nodes.forEach(detach);
      t11 = claim_space(div5_nodes);
      label1 = claim_element(div5_nodes, "LABEL", { for: true, class: true });
      var label1_nodes = children(label1);
      t12 = claim_text(label1_nodes, "✕");
      label1_nodes.forEach(detach);
      t13 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      button1 = claim_element(div4_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t14 = claim_text(button1_nodes, "Disconnect");
      button1_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input0, "type", "checkbox");
      attr(input0, "id", "connect-modal-eth");
      attr(input0, "class", "modal-toggle");
      attr(h30, "class", "font-bold text-lg");
      attr(label0, "for", "connect-modal-eth");
      attr(label0, "class", "btn btn-sm absolute right-2 top-2");
      attr(img, "class", "mr-2");
      if (!src_url_equal(img.src, img_src_value = MetamaskLogo))
        attr(img, "src", img_src_value);
      attr(img, "alt", "metamask");
      attr(img, "width", 35);
      attr(button0, "class", "btn btn-block");
      attr(div1, "class", "flex py-4 justify-center flex-col gap-2");
      attr(div2, "class", "modal-box");
      attr(div3, "class", "modal modal-bottom sm:modal-middle");
      attr(input1, "type", "checkbox");
      attr(input1, "id", "disconnect-modal-eth");
      attr(input1, "class", "modal-toggle");
      attr(h31, "class", "font-bold text-lg");
      attr(label1, "for", "disconnect-modal");
      attr(label1, "class", "btn btn-sm absolute right-2 top-2");
      attr(button1, "class", "btn btn-sm");
      attr(div4, "class", "modal-action");
      attr(div5, "class", "modal-box");
      attr(div6, "class", "modal modal-bottom sm:modal-middle");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      if_block0.m(div0, null);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, input0, anchor);
      input0.checked = /*isConnectingModalOpen*/
      ctx[1];
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, h30);
      append_hydration(h30, t2);
      append_hydration(div2, t3);
      append_hydration(div2, label0);
      append_hydration(label0, t4);
      append_hydration(div2, t5);
      append_hydration(div2, div1);
      append_hydration(div1, button0);
      append_hydration(button0, img);
      append_hydration(button0, t6);
      append_hydration(div2, t7);
      if (if_block1)
        if_block1.m(div2, null);
      insert_hydration(target, t8, anchor);
      insert_hydration(target, input1, anchor);
      input1.checked = /*isDisconnectingModalOpen*/
      ctx[2];
      insert_hydration(target, t9, anchor);
      insert_hydration(target, div6, anchor);
      append_hydration(div6, div5);
      append_hydration(div5, h31);
      append_hydration(h31, t10);
      append_hydration(div5, t11);
      append_hydration(div5, label1);
      append_hydration(label1, t12);
      append_hydration(div5, t13);
      append_hydration(div5, div4);
      append_hydration(div4, button1);
      append_hydration(button1, t14);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "change",
            /*input0_change_handler*/
            ctx[9]
          ),
          listen(
            button0,
            "click",
            /*click_handler*/
            ctx[10]
          ),
          listen(
            input1,
            "change",
            /*input1_change_handler*/
            ctx[11]
          ),
          listen(
            button1,
            "click",
            /*disconnect*/
            ctx[8]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div0, null);
        }
      }
      if (dirty & /*isConnectingModalOpen*/
      2) {
        input0.checked = /*isConnectingModalOpen*/
        ctx2[1];
      }
      if (/*errorMessage*/
      ctx2[0] !== "") {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*errorMessage*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$3(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div2, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty & /*isDisconnectingModalOpen*/
      4) {
        input1.checked = /*isDisconnectingModalOpen*/
        ctx2[2];
      }
    },
    i(local) {
      transition_in(if_block1);
    },
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div0);
      if_block0.d();
      if (detaching)
        detach(t0);
      if (detaching)
        detach(input0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div3);
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t8);
      if (detaching)
        detach(input1);
      if (detaching)
        detach(t9);
      if (detaching)
        detach(div6);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let $Ethereum;
  let $connected;
  let $address;
  component_subscribe($$self, Ethereum, ($$value) => $$invalidate(12, $Ethereum = $$value));
  const { connected, address, wallets } = $Ethereum;
  component_subscribe($$self, connected, (value) => $$invalidate(3, $connected = value));
  component_subscribe($$self, address, (value) => $$invalidate(4, $address = value));
  let errorMessage = "";
  let isConnectingModalOpen = false;
  let isDisconnectingModalOpen = false;
  const connect = async (wallet) => {
    switch (wallet) {
      case "metamask":
        if (!wallets.MetaMask.available) {
          $$invalidate(0, errorMessage = "MetaMask is not installed!");
          return;
        }
        await wallets.MetaMask.connectInjected();
        break;
    }
    $$invalidate(1, isConnectingModalOpen = false);
  };
  const disconnect = () => {
    Ethereum.disconnect();
    $$invalidate(2, isDisconnectingModalOpen = false);
  };
  function input0_change_handler() {
    isConnectingModalOpen = this.checked;
    $$invalidate(1, isConnectingModalOpen);
  }
  const click_handler = () => connect("metamask");
  function input1_change_handler() {
    isDisconnectingModalOpen = this.checked;
    $$invalidate(2, isDisconnectingModalOpen);
  }
  return [
    errorMessage,
    isConnectingModalOpen,
    isDisconnectingModalOpen,
    $connected,
    $address,
    connected,
    address,
    connect,
    disconnect,
    input0_change_handler,
    click_handler,
    input1_change_handler
  ];
}
class ConnectWalletETH extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
  }
}
const TempleLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAABUFBMVEUAAAD/6036SgP7bhT7Vgn8exn9jSL8ehn7axL/7k/8gRz/7k/9jSL/7k/7cBT8gh3/6Uz9lCX/6U39jyP/7U79jyP8ehn8hx/9jyP9iiD/6Ez8dxj8cxb/6037chb/70/9jCH8dxj7bhP/6077aRH8kyT/7k//7U//7E77bxT8dBb/8FD/7U7/8FD/71D7Wwv+00P/4Ej/2kX/5kv/3kf+10T/5Er/603/6Uz/7U7/1EL+yj7+0UH/zD/8eRn8iSD+z0D8fBr8hh78gx38jCH8dhf6SgP9kiT6Ugf7YQ78cRX6Twb8gRz8fxv7ahL9jyL7ZA/7ZxD8dBb7VQn6TQX+yD37WQr7XAz7Wwv7Xg36RgH/70/9lSX9kCP9lyb8bhP7Vwn+uzf7VAj6QwD+wjr+xjz+uDb9myj+vjj+tjX9nyr+rDD+py79pCz+sTL6QgBC7dvyAAAAMXRSTlMAUIAwgFAQEO+/j4BQEO/Pj2AQz4+PgGAg38/Pj89gQJ9gYEAw78/Pz8+fj0DPz3AwWk4INgAAB+hJREFUeNq1mleT2jAURknvvffee+8QDNhgAoReQkwINhBa/v9b7hXSDQpjEjnSeduZnTlndj9YvFJsI9tuBEEdeId8AD4C75G3yAvGU8Zz5MmSl8AzxuvXr1+92heLyrbdBR0BeyL7D/Z6voaAV//h7011BFyL7HddT0fAvmh+F/mkI2BPVD/i/3cAEN1fqUx1BFyL5K8wPB0B+5T9FU4mk9IQoDyCk1zO8DUEvFEM2AFyYqojQHEEuzJEPD7SEaA6gnNcjiR0BKiO4DzICV8EBD9WGEr0/2C85IkIUB5BnEgmFyLALwJl4PPnzzmg3W42m61Wo/GtWq1+z2az+Xy+VqvZSKfTGQy+LSjgvuIIhBwZ0a8grhaQLzoUoDwCkAvSFPBVIQAoFl0KUB3B3iRRKPgiYKYUkIPvfM8D1Ecg5MhCBPgqAVX8vikFqI4A5JxPnyaRXoYTrExTgOoIDnE5UooU0MefUZkClEcAck4qFUQJeM5+Qx95gPoIhBxZRHonzLRgH1MKuKQ4ApAT80gBHq4zRQHKIyC9ZTmRAobw0vjepADlEXA5I4gS8DwL5D+IgC+KAftBTvyI9NewiO8LcwpQHMFOi0gk5pECvuK7UpIClEfA5Uj33wLevpMCxi4QpwDlEYCcCP4l4G3bCftAggHKI1jxp3/8NQD9g+KmAOURCDky+3vA29xgMNgUoDyCYyAXeH8PQP9guCFAeQQn0kSpFPw1oIgBzoYA9REIOTL8a8BXDChuCFAfAcg5X7/O/hrwo4NsClAfAZcDzujvrwIWMAwPiDACLmfU/xpQxAAnPCDCCEAuKFkl9lW363neCJhMJgs5wMGAHgUMp8BiscBnGHxS8X0/eKw4Aue3v5nPZqvVRqPVbLZzuc+fy+VichRIAcMOQgGznlvJwLNF4VPKghd0yel6R2KqI2Dybrf7tZVfC4h73lAKWI6gLwLqawHgVx0Bypm/thYAfm8mB/Q6Hdvu0gb+DEC/6giWfqdRWwsAPyAHODbQo4C0HEB+lRF0cXNOw14LyHgepgVSwNBGKGAqBZBfbQQe+L/ZawGZ7pIfKwGAjfRFQH014FQsEifAX7XXAiood4C5HNDDgC69D/wOIL/yCDzne2ctoAJyjhzQxQCXAkoUQH71EXzvrAW4wg7vksHvABoBBUxFAPnVebRVsJ1YygH4Q7GQAvgIRMCLvScZO2J6OcblyEQOcDHAWwYAW2JGOFHipAE5oFsDXAo4HDPCfiFHfCmgX0Mo4GzMCDvTRCKxkB9MWMCYBSBHY0Y4xuXISA5wMcCjAFMjADkhB3gYUKEAUyMQcgvwpQAcQT5PAaZGIOTIQn44zSNjDDA5gkMWkRrJARUMGGGAyRHs5XKGHOBhQAYDjI4A5IQvBfTzCAYYHQHZ4R9pUymAj4A+lpsaAZcjnhxQyQIjCjA1Ai4vIHLACAMyFGBoBDu4HEgmfSmgn0UowNAIdgk5Ml0JAFjAWAQYGwHIBY4ckGEjoABTIxD2OCAF8BFQgKkRCDniSwFj8H//TgGmRhBfYfY7APmO+DzA2AjOcXkGKMkBGfBXRxRgaATnUS6QA0ZVIE4BpkZAdjhn96WAcRWhgAsxI+wScmRGAQwW4NO/aEyNgMtdIC0HxDFgQgGmRoBygRww+gYkKcDUCNzf9MZSwPgbQgGmRiDkyJwCGN8agC8CTI3gDrgFCTkgiQETCjAzgqtW+JHNBAOSFGBkBFd7vfAAv4FQAIzAgN91++GHVqBvtXweYGIEF11gHh6QbAETCthiwl+ppMMDJhhQoIDjuv38olV4gN9CKOCCdn+GMQ4/uER/M1gGAAd0+q8s7fhBJDyg0AQmFLBFsz++xAkPmGBAgQI0joCuOCWB8AC/iVDAbY0/AHRzCn744TULCOjIRt8ITgs5Mg0PKLSBOQVoHMEZLmfPpeEBEwz4RAEaR3AX5UgKCA/w2wgFaBzBKS5HLD8kAGABgQjQOQIhR6bhAZ/An5tTgM4RoJyRSIzCA+Y5IEUBGkdwmcsZ4QFBDqGAWxpHAHK62uCHX2JhAQEP0DoCIUccdo47AebzvhyQwoA5BegcQZouFqQa3xotdo5XLidHcoAYAQvQOwKUI19T36oUEPe8D1KAGAEL0DqCI/xWgWNVsxQAfq8vX2TKfQbqPEDrCFAOWNksBWS6wEwOSGHAjAJ0jsBZ+vMUAH4HkAPmGGBRgM4R4KG6la9RQIWfI36QAoLPCAXc1DgCONK2ajYFuCjHk7wf8mU2FlCnKxwaR+B5iZpNAS7KkfREDrDYCChA5wgStk0BvaWcIQfMwF+2KEDjCI6sHOfeRbk4RpOv8wVlhAJgBCbYKeTIYiUAYAHvRACMwAjHVs7QRnKAhQEzCjB1isjlSEoOmGFAggLuxYywX8iRuhRQLyMU8FC7m26/0gnSQgqgEbAAYyM4xOVAwZMDEkVgSgGmzg64HEnKATMMSFCAoRHsEHKkLgXUiwgFPIgZYRfKOfEpBTBYwDseYG4EXA5k2vjPG/YAj49wn1wMiIuPkDdOx4ywF92MSta22Y2f7/hXqtUsox+v/jF2b4uZYYc4O6nkbSngM/NDgCE/jQDkiJvvSAHcDwHkN8Q5dnbh1jpyQDuHYIAxP50dAL3aQATQBtptHmDOT2cHPXsQHmDKTyNA/88NAbuvx8xyp2j/DA8w6KcRgD88YKP/Fx7dSgHaoR+IAAAAAElFTkSuQmCC";
function create_else_block$1(ctx) {
  let label;
  let t_value = shortAccountString(
    10,
    5,
    /*$address*/
    ctx[4] ?? ""
  ) + "";
  let t;
  return {
    c() {
      label = element("label");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      t = claim_text(label_nodes, t_value);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label, "for", "disconnect-modal-tzs");
      attr(label, "class", "btn btn-sm btn-secondary");
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*$address*/
      16 && t_value !== (t_value = shortAccountString(
        10,
        5,
        /*$address*/
        ctx2[4] ?? ""
      ) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(label);
    }
  };
}
function create_if_block_1$1(ctx) {
  let label;
  let t;
  return {
    c() {
      label = element("label");
      t = text("Connect Wallet");
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      t = claim_text(label_nodes, "Connect Wallet");
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label, "for", "connect-modal-tzs");
      attr(label, "class", "btn btn-sm btn-secondary");
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(label);
    }
  };
}
function create_if_block$2(ctx) {
  let div1;
  let div0;
  let svg;
  let path;
  let t0;
  let span;
  let t1;
  let div1_intro;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      t0 = space();
      span = element("span");
      t1 = text(
        /*errorMessage*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      svg = claim_svg_element(div0_nodes, "svg", {
        xmlns: true,
        class: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      t0 = claim_space(div0_nodes);
      span = claim_element(div0_nodes, "SPAN", {});
      var span_nodes = children(span);
      t1 = claim_text(
        span_nodes,
        /*errorMessage*/
        ctx[0]
      );
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "stroke-width", "2");
      attr(path, "d", "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "stroke-current flex-shrink-0 h-6 w-6");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(div1, "class", "alert alert-error shadow-lg");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, svg);
      append_hydration(svg, path);
      append_hydration(div0, t0);
      append_hydration(div0, span);
      append_hydration(span, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*errorMessage*/
      1)
        set_data(
          t1,
          /*errorMessage*/
          ctx2[0]
        );
    },
    i(local) {
      if (!div1_intro) {
        add_render_callback(() => {
          div1_intro = create_in_transition(div1, fade, {});
          div1_intro.start();
        });
      }
    },
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_fragment$2(ctx) {
  let div0;
  let t0;
  let input0;
  let t1;
  let div3;
  let div2;
  let h30;
  let t2;
  let t3;
  let label0;
  let t4;
  let t5;
  let div1;
  let button0;
  let img;
  let img_src_value;
  let t6;
  let t7;
  let t8;
  let input1;
  let t9;
  let div6;
  let div5;
  let h31;
  let t10;
  let t11;
  let label1;
  let t12;
  let t13;
  let div4;
  let button1;
  let t14;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (!/*$connected*/
    ctx2[3])
      return create_if_block_1$1;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*errorMessage*/
    ctx[0] !== "" && create_if_block$2(ctx)
  );
  return {
    c() {
      div0 = element("div");
      if_block0.c();
      t0 = space();
      input0 = element("input");
      t1 = space();
      div3 = element("div");
      div2 = element("div");
      h30 = element("h3");
      t2 = text("Connect wallet");
      t3 = space();
      label0 = element("label");
      t4 = text("✕");
      t5 = space();
      div1 = element("div");
      button0 = element("button");
      img = element("img");
      t6 = text("\n				Temple Wallet");
      t7 = space();
      if (if_block1)
        if_block1.c();
      t8 = space();
      input1 = element("input");
      t9 = space();
      div6 = element("div");
      div5 = element("div");
      h31 = element("h3");
      t10 = text("You are going to disconnect");
      t11 = space();
      label1 = element("label");
      t12 = text("✕");
      t13 = space();
      div4 = element("div");
      button1 = element("button");
      t14 = text("Disconnect");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", {});
      var div0_nodes = children(div0);
      if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(nodes);
      input0 = claim_element(nodes, "INPUT", { type: true, id: true, class: true });
      t1 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h30 = claim_element(div2_nodes, "H3", { class: true });
      var h30_nodes = children(h30);
      t2 = claim_text(h30_nodes, "Connect wallet");
      h30_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      label0 = claim_element(div2_nodes, "LABEL", { for: true, class: true });
      var label0_nodes = children(label0);
      t4 = claim_text(label0_nodes, "✕");
      label0_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button0 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      img = claim_element(button0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t6 = claim_text(button0_nodes, "\n				Temple Wallet");
      button0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t7 = claim_space(div2_nodes);
      if (if_block1)
        if_block1.l(div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t8 = claim_space(nodes);
      input1 = claim_element(nodes, "INPUT", { type: true, id: true, class: true });
      t9 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      h31 = claim_element(div5_nodes, "H3", { class: true });
      var h31_nodes = children(h31);
      t10 = claim_text(h31_nodes, "You are going to disconnect");
      h31_nodes.forEach(detach);
      t11 = claim_space(div5_nodes);
      label1 = claim_element(div5_nodes, "LABEL", { for: true, class: true });
      var label1_nodes = children(label1);
      t12 = claim_text(label1_nodes, "✕");
      label1_nodes.forEach(detach);
      t13 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      button1 = claim_element(div4_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t14 = claim_text(button1_nodes, "Disconnect");
      button1_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input0, "type", "checkbox");
      attr(input0, "id", "connect-modal-tzs");
      attr(input0, "class", "modal-toggle");
      attr(h30, "class", "font-bold text-lg");
      attr(label0, "for", "connect-modal-tzs");
      attr(label0, "class", "btn btn-sm absolute right-2 top-2");
      attr(img, "class", "mr-2");
      if (!src_url_equal(img.src, img_src_value = TempleLogo))
        attr(img, "src", img_src_value);
      attr(img, "alt", "metamask");
      attr(img, "width", 25);
      attr(button0, "class", "btn btn-block");
      attr(div1, "class", "flex py-4 justify-center flex-col gap-2");
      attr(div2, "class", "modal-box");
      attr(div3, "class", "modal modal-bottom sm:modal-middle");
      attr(input1, "type", "checkbox");
      attr(input1, "id", "disconnect-modal-tzs");
      attr(input1, "class", "modal-toggle");
      attr(h31, "class", "font-bold text-lg");
      attr(label1, "for", "disconnect-modal-tzs");
      attr(label1, "class", "btn btn-sm absolute right-2 top-2");
      attr(button1, "class", "btn btn-sm");
      attr(div4, "class", "modal-action");
      attr(div5, "class", "modal-box");
      attr(div6, "class", "modal modal-bottom sm:modal-middle");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      if_block0.m(div0, null);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, input0, anchor);
      input0.checked = /*isConnectingModalOpen*/
      ctx[1];
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, h30);
      append_hydration(h30, t2);
      append_hydration(div2, t3);
      append_hydration(div2, label0);
      append_hydration(label0, t4);
      append_hydration(div2, t5);
      append_hydration(div2, div1);
      append_hydration(div1, button0);
      append_hydration(button0, img);
      append_hydration(button0, t6);
      append_hydration(div2, t7);
      if (if_block1)
        if_block1.m(div2, null);
      insert_hydration(target, t8, anchor);
      insert_hydration(target, input1, anchor);
      input1.checked = /*isDisconnectingModalOpen*/
      ctx[2];
      insert_hydration(target, t9, anchor);
      insert_hydration(target, div6, anchor);
      append_hydration(div6, div5);
      append_hydration(div5, h31);
      append_hydration(h31, t10);
      append_hydration(div5, t11);
      append_hydration(div5, label1);
      append_hydration(label1, t12);
      append_hydration(div5, t13);
      append_hydration(div5, div4);
      append_hydration(div4, button1);
      append_hydration(button1, t14);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "change",
            /*input0_change_handler*/
            ctx[9]
          ),
          listen(
            button0,
            "click",
            /*connect*/
            ctx[7]
          ),
          listen(
            input1,
            "change",
            /*input1_change_handler*/
            ctx[10]
          ),
          listen(
            button1,
            "click",
            /*disconnect*/
            ctx[8]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div0, null);
        }
      }
      if (dirty & /*isConnectingModalOpen*/
      2) {
        input0.checked = /*isConnectingModalOpen*/
        ctx2[1];
      }
      if (/*errorMessage*/
      ctx2[0] !== "") {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*errorMessage*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$2(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div2, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty & /*isDisconnectingModalOpen*/
      4) {
        input1.checked = /*isDisconnectingModalOpen*/
        ctx2[2];
      }
    },
    i(local) {
      transition_in(if_block1);
    },
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div0);
      if_block0.d();
      if (detaching)
        detach(t0);
      if (detaching)
        detach(input0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div3);
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t8);
      if (detaching)
        detach(input1);
      if (detaching)
        detach(t9);
      if (detaching)
        detach(div6);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let $Tezos;
  let $connected;
  let $address;
  component_subscribe($$self, Tezos, ($$value) => $$invalidate(11, $Tezos = $$value));
  const { connected, address, wallets } = $Tezos;
  component_subscribe($$self, connected, (value) => $$invalidate(3, $connected = value));
  component_subscribe($$self, address, (value) => $$invalidate(4, $address = value));
  let errorMessage = "";
  let isConnectingModalOpen = false;
  let isDisconnectingModalOpen = false;
  const connect = async () => {
    if (!wallets.TempleWallet.available) {
      $$invalidate(0, errorMessage = "TempleWallet is not installed!");
      return;
    }
    await wallets.TempleWallet.connectInjected();
    $$invalidate(1, isConnectingModalOpen = false);
  };
  const disconnect = () => {
    Tezos.disconnect();
    $$invalidate(2, isDisconnectingModalOpen = false);
  };
  function input0_change_handler() {
    isConnectingModalOpen = this.checked;
    $$invalidate(1, isConnectingModalOpen);
  }
  function input1_change_handler() {
    isDisconnectingModalOpen = this.checked;
    $$invalidate(2, isDisconnectingModalOpen);
  }
  return [
    errorMessage,
    isConnectingModalOpen,
    isDisconnectingModalOpen,
    $connected,
    $address,
    connected,
    address,
    connect,
    disconnect,
    input0_change_handler,
    input1_change_handler
  ];
}
class ConnectWalletTZS extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
  }
}
var qrCodeStylingExports = {};
var qrCodeStyling = {
  get exports() {
    return qrCodeStylingExports;
  },
  set exports(v) {
    qrCodeStylingExports = v;
  }
};
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(self, function() {
    return (() => {
      var t = { 192: (t2, e2) => {
        var r2, n, o = function() {
          var t3 = function(t4, e4) {
            var r4 = t4, n3 = a[e4], o3 = null, i2 = 0, u2 = null, v2 = [], w2 = {}, m = function(t5, e5) {
              o3 = function(t6) {
                for (var e6 = new Array(t6), r5 = 0; r5 < t6; r5 += 1) {
                  e6[r5] = new Array(t6);
                  for (var n4 = 0; n4 < t6; n4 += 1)
                    e6[r5][n4] = null;
                }
                return e6;
              }(i2 = 4 * r4 + 17), b(0, 0), b(i2 - 7, 0), b(0, i2 - 7), x(), _(), M(t5, e5), r4 >= 7 && S(t5), null == u2 && (u2 = A(r4, n3, v2)), C(u2, e5);
            }, b = function(t5, e5) {
              for (var r5 = -1; r5 <= 7; r5 += 1)
                if (!(t5 + r5 <= -1 || i2 <= t5 + r5))
                  for (var n4 = -1; n4 <= 7; n4 += 1)
                    e5 + n4 <= -1 || i2 <= e5 + n4 || (o3[t5 + r5][e5 + n4] = 0 <= r5 && r5 <= 6 && (0 == n4 || 6 == n4) || 0 <= n4 && n4 <= 6 && (0 == r5 || 6 == r5) || 2 <= r5 && r5 <= 4 && 2 <= n4 && n4 <= 4);
            }, _ = function() {
              for (var t5 = 8; t5 < i2 - 8; t5 += 1)
                null == o3[t5][6] && (o3[t5][6] = t5 % 2 == 0);
              for (var e5 = 8; e5 < i2 - 8; e5 += 1)
                null == o3[6][e5] && (o3[6][e5] = e5 % 2 == 0);
            }, x = function() {
              for (var t5 = s.getPatternPosition(r4), e5 = 0; e5 < t5.length; e5 += 1)
                for (var n4 = 0; n4 < t5.length; n4 += 1) {
                  var i3 = t5[e5], a2 = t5[n4];
                  if (null == o3[i3][a2])
                    for (var u3 = -2; u3 <= 2; u3 += 1)
                      for (var h2 = -2; h2 <= 2; h2 += 1)
                        o3[i3 + u3][a2 + h2] = -2 == u3 || 2 == u3 || -2 == h2 || 2 == h2 || 0 == u3 && 0 == h2;
                }
            }, S = function(t5) {
              for (var e5 = s.getBCHTypeNumber(r4), n4 = 0; n4 < 18; n4 += 1) {
                var a2 = !t5 && 1 == (e5 >> n4 & 1);
                o3[Math.floor(n4 / 3)][n4 % 3 + i2 - 8 - 3] = a2;
              }
              for (n4 = 0; n4 < 18; n4 += 1)
                a2 = !t5 && 1 == (e5 >> n4 & 1), o3[n4 % 3 + i2 - 8 - 3][Math.floor(n4 / 3)] = a2;
            }, M = function(t5, e5) {
              for (var r5 = n3 << 3 | e5, a2 = s.getBCHTypeInfo(r5), u3 = 0; u3 < 15; u3 += 1) {
                var h2 = !t5 && 1 == (a2 >> u3 & 1);
                u3 < 6 ? o3[u3][8] = h2 : u3 < 8 ? o3[u3 + 1][8] = h2 : o3[i2 - 15 + u3][8] = h2;
              }
              for (u3 = 0; u3 < 15; u3 += 1)
                h2 = !t5 && 1 == (a2 >> u3 & 1), u3 < 8 ? o3[8][i2 - u3 - 1] = h2 : u3 < 9 ? o3[8][15 - u3 - 1 + 1] = h2 : o3[8][15 - u3 - 1] = h2;
              o3[i2 - 8][8] = !t5;
            }, C = function(t5, e5) {
              for (var r5 = -1, n4 = i2 - 1, a2 = 7, u3 = 0, h2 = s.getMaskFunction(e5), c2 = i2 - 1; c2 > 0; c2 -= 2)
                for (6 == c2 && (c2 -= 1); ; ) {
                  for (var l2 = 0; l2 < 2; l2 += 1)
                    if (null == o3[n4][c2 - l2]) {
                      var d2 = false;
                      u3 < t5.length && (d2 = 1 == (t5[u3] >>> a2 & 1)), h2(n4, c2 - l2) && (d2 = !d2), o3[n4][c2 - l2] = d2, -1 == (a2 -= 1) && (u3 += 1, a2 = 7);
                    }
                  if ((n4 += r5) < 0 || i2 <= n4) {
                    n4 -= r5, r5 = -r5;
                    break;
                  }
                }
            }, A = function(t5, e5, r5) {
              for (var n4 = c.getRSBlocks(t5, e5), o4 = l(), i3 = 0; i3 < r5.length; i3 += 1) {
                var a2 = r5[i3];
                o4.put(a2.getMode(), 4), o4.put(a2.getLength(), s.getLengthInBits(a2.getMode(), t5)), a2.write(o4);
              }
              var u3 = 0;
              for (i3 = 0; i3 < n4.length; i3 += 1)
                u3 += n4[i3].dataCount;
              if (o4.getLengthInBits() > 8 * u3)
                throw "code length overflow. (" + o4.getLengthInBits() + ">" + 8 * u3 + ")";
              for (o4.getLengthInBits() + 4 <= 8 * u3 && o4.put(0, 4); o4.getLengthInBits() % 8 != 0; )
                o4.putBit(false);
              for (; !(o4.getLengthInBits() >= 8 * u3 || (o4.put(236, 8), o4.getLengthInBits() >= 8 * u3)); )
                o4.put(17, 8);
              return function(t6, e6) {
                for (var r6 = 0, n5 = 0, o5 = 0, i4 = new Array(e6.length), a3 = new Array(e6.length), u4 = 0; u4 < e6.length; u4 += 1) {
                  var c2 = e6[u4].dataCount, l2 = e6[u4].totalCount - c2;
                  n5 = Math.max(n5, c2), o5 = Math.max(o5, l2), i4[u4] = new Array(c2);
                  for (var d2 = 0; d2 < i4[u4].length; d2 += 1)
                    i4[u4][d2] = 255 & t6.getBuffer()[d2 + r6];
                  r6 += c2;
                  var f2 = s.getErrorCorrectPolynomial(l2), g2 = h(i4[u4], f2.getLength() - 1).mod(f2);
                  for (a3[u4] = new Array(f2.getLength() - 1), d2 = 0; d2 < a3[u4].length; d2 += 1) {
                    var p2 = d2 + g2.getLength() - a3[u4].length;
                    a3[u4][d2] = p2 >= 0 ? g2.getAt(p2) : 0;
                  }
                }
                var v3 = 0;
                for (d2 = 0; d2 < e6.length; d2 += 1)
                  v3 += e6[d2].totalCount;
                var w3 = new Array(v3), y2 = 0;
                for (d2 = 0; d2 < n5; d2 += 1)
                  for (u4 = 0; u4 < e6.length; u4 += 1)
                    d2 < i4[u4].length && (w3[y2] = i4[u4][d2], y2 += 1);
                for (d2 = 0; d2 < o5; d2 += 1)
                  for (u4 = 0; u4 < e6.length; u4 += 1)
                    d2 < a3[u4].length && (w3[y2] = a3[u4][d2], y2 += 1);
                return w3;
              }(o4, n4);
            };
            w2.addData = function(t5, e5) {
              var r5 = null;
              switch (e5 = e5 || "Byte") {
                case "Numeric":
                  r5 = d(t5);
                  break;
                case "Alphanumeric":
                  r5 = f(t5);
                  break;
                case "Byte":
                  r5 = g(t5);
                  break;
                case "Kanji":
                  r5 = p(t5);
                  break;
                default:
                  throw "mode:" + e5;
              }
              v2.push(r5), u2 = null;
            }, w2.isDark = function(t5, e5) {
              if (t5 < 0 || i2 <= t5 || e5 < 0 || i2 <= e5)
                throw t5 + "," + e5;
              return o3[t5][e5];
            }, w2.getModuleCount = function() {
              return i2;
            }, w2.make = function() {
              if (r4 < 1) {
                for (var t5 = 1; t5 < 40; t5++) {
                  for (var e5 = c.getRSBlocks(t5, n3), o4 = l(), i3 = 0; i3 < v2.length; i3++) {
                    var a2 = v2[i3];
                    o4.put(a2.getMode(), 4), o4.put(a2.getLength(), s.getLengthInBits(a2.getMode(), t5)), a2.write(o4);
                  }
                  var u3 = 0;
                  for (i3 = 0; i3 < e5.length; i3++)
                    u3 += e5[i3].dataCount;
                  if (o4.getLengthInBits() <= 8 * u3)
                    break;
                }
                r4 = t5;
              }
              m(false, function() {
                for (var t6 = 0, e6 = 0, r5 = 0; r5 < 8; r5 += 1) {
                  m(true, r5);
                  var n4 = s.getLostPoint(w2);
                  (0 == r5 || t6 > n4) && (t6 = n4, e6 = r5);
                }
                return e6;
              }());
            }, w2.createTableTag = function(t5, e5) {
              t5 = t5 || 2;
              var r5 = "";
              r5 += '<table style="', r5 += " border-width: 0px; border-style: none;", r5 += " border-collapse: collapse;", r5 += " padding: 0px; margin: " + (e5 = void 0 === e5 ? 4 * t5 : e5) + "px;", r5 += '">', r5 += "<tbody>";
              for (var n4 = 0; n4 < w2.getModuleCount(); n4 += 1) {
                r5 += "<tr>";
                for (var o4 = 0; o4 < w2.getModuleCount(); o4 += 1)
                  r5 += '<td style="', r5 += " border-width: 0px; border-style: none;", r5 += " border-collapse: collapse;", r5 += " padding: 0px; margin: 0px;", r5 += " width: " + t5 + "px;", r5 += " height: " + t5 + "px;", r5 += " background-color: ", r5 += w2.isDark(n4, o4) ? "#000000" : "#ffffff", r5 += ";", r5 += '"/>';
                r5 += "</tr>";
              }
              return (r5 += "</tbody>") + "</table>";
            }, w2.createSvgTag = function(t5, e5, r5, n4) {
              var o4 = {};
              "object" == typeof arguments[0] && (t5 = (o4 = arguments[0]).cellSize, e5 = o4.margin, r5 = o4.alt, n4 = o4.title), t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5, (r5 = "string" == typeof r5 ? { text: r5 } : r5 || {}).text = r5.text || null, r5.id = r5.text ? r5.id || "qrcode-description" : null, (n4 = "string" == typeof n4 ? { text: n4 } : n4 || {}).text = n4.text || null, n4.id = n4.text ? n4.id || "qrcode-title" : null;
              var i3, a2, s2, u3, h2 = w2.getModuleCount() * t5 + 2 * e5, c2 = "";
              for (u3 = "l" + t5 + ",0 0," + t5 + " -" + t5 + ",0 0,-" + t5 + "z ", c2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', c2 += o4.scalable ? "" : ' width="' + h2 + 'px" height="' + h2 + 'px"', c2 += ' viewBox="0 0 ' + h2 + " " + h2 + '" ', c2 += ' preserveAspectRatio="xMinYMin meet"', c2 += n4.text || r5.text ? ' role="img" aria-labelledby="' + k([n4.id, r5.id].join(" ").trim()) + '"' : "", c2 += ">", c2 += n4.text ? '<title id="' + k(n4.id) + '">' + k(n4.text) + "</title>" : "", c2 += r5.text ? '<description id="' + k(r5.id) + '">' + k(r5.text) + "</description>" : "", c2 += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', c2 += '<path d="', a2 = 0; a2 < w2.getModuleCount(); a2 += 1)
                for (s2 = a2 * t5 + e5, i3 = 0; i3 < w2.getModuleCount(); i3 += 1)
                  w2.isDark(a2, i3) && (c2 += "M" + (i3 * t5 + e5) + "," + s2 + u3);
              return (c2 += '" stroke="transparent" fill="black"/>') + "</svg>";
            }, w2.createDataURL = function(t5, e5) {
              t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5;
              var r5 = w2.getModuleCount() * t5 + 2 * e5, n4 = e5, o4 = r5 - e5;
              return y(r5, r5, function(e6, r6) {
                if (n4 <= e6 && e6 < o4 && n4 <= r6 && r6 < o4) {
                  var i3 = Math.floor((e6 - n4) / t5), a2 = Math.floor((r6 - n4) / t5);
                  return w2.isDark(a2, i3) ? 0 : 1;
                }
                return 1;
              });
            }, w2.createImgTag = function(t5, e5, r5) {
              t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5;
              var n4 = w2.getModuleCount() * t5 + 2 * e5, o4 = "";
              return o4 += "<img", o4 += ' src="', o4 += w2.createDataURL(t5, e5), o4 += '"', o4 += ' width="', o4 += n4, o4 += '"', o4 += ' height="', o4 += n4, o4 += '"', r5 && (o4 += ' alt="', o4 += k(r5), o4 += '"'), o4 + "/>";
            };
            var k = function(t5) {
              for (var e5 = "", r5 = 0; r5 < t5.length; r5 += 1) {
                var n4 = t5.charAt(r5);
                switch (n4) {
                  case "<":
                    e5 += "&lt;";
                    break;
                  case ">":
                    e5 += "&gt;";
                    break;
                  case "&":
                    e5 += "&amp;";
                    break;
                  case '"':
                    e5 += "&quot;";
                    break;
                  default:
                    e5 += n4;
                }
              }
              return e5;
            };
            return w2.createASCII = function(t5, e5) {
              if ((t5 = t5 || 1) < 2)
                return function(t6) {
                  t6 = void 0 === t6 ? 2 : t6;
                  var e6, r6, n5, o5, i4, a3 = 1 * w2.getModuleCount() + 2 * t6, s3 = t6, u4 = a3 - t6, h3 = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, c3 = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, l3 = "";
                  for (e6 = 0; e6 < a3; e6 += 2) {
                    for (n5 = Math.floor((e6 - s3) / 1), o5 = Math.floor((e6 + 1 - s3) / 1), r6 = 0; r6 < a3; r6 += 1)
                      i4 = "█", s3 <= r6 && r6 < u4 && s3 <= e6 && e6 < u4 && w2.isDark(n5, Math.floor((r6 - s3) / 1)) && (i4 = " "), s3 <= r6 && r6 < u4 && s3 <= e6 + 1 && e6 + 1 < u4 && w2.isDark(o5, Math.floor((r6 - s3) / 1)) ? i4 += " " : i4 += "█", l3 += t6 < 1 && e6 + 1 >= u4 ? c3[i4] : h3[i4];
                    l3 += "\n";
                  }
                  return a3 % 2 && t6 > 0 ? l3.substring(0, l3.length - a3 - 1) + Array(a3 + 1).join("▀") : l3.substring(0, l3.length - 1);
                }(e5);
              t5 -= 1, e5 = void 0 === e5 ? 2 * t5 : e5;
              var r5, n4, o4, i3, a2 = w2.getModuleCount() * t5 + 2 * e5, s2 = e5, u3 = a2 - e5, h2 = Array(t5 + 1).join("██"), c2 = Array(t5 + 1).join("  "), l2 = "", d2 = "";
              for (r5 = 0; r5 < a2; r5 += 1) {
                for (o4 = Math.floor((r5 - s2) / t5), d2 = "", n4 = 0; n4 < a2; n4 += 1)
                  i3 = 1, s2 <= n4 && n4 < u3 && s2 <= r5 && r5 < u3 && w2.isDark(o4, Math.floor((n4 - s2) / t5)) && (i3 = 0), d2 += i3 ? h2 : c2;
                for (o4 = 0; o4 < t5; o4 += 1)
                  l2 += d2 + "\n";
              }
              return l2.substring(0, l2.length - 1);
            }, w2.renderTo2dContext = function(t5, e5) {
              e5 = e5 || 2;
              for (var r5 = w2.getModuleCount(), n4 = 0; n4 < r5; n4++)
                for (var o4 = 0; o4 < r5; o4++)
                  t5.fillStyle = w2.isDark(n4, o4) ? "black" : "white", t5.fillRect(n4 * e5, o4 * e5, e5, e5);
            }, w2;
          };
          t3.stringToBytes = (t3.stringToBytesFuncs = { default: function(t4) {
            for (var e4 = [], r4 = 0; r4 < t4.length; r4 += 1) {
              var n3 = t4.charCodeAt(r4);
              e4.push(255 & n3);
            }
            return e4;
          } }).default, t3.createStringToBytes = function(t4, e4) {
            var r4 = function() {
              for (var r5 = w(t4), n4 = function() {
                var t5 = r5.read();
                if (-1 == t5)
                  throw "eof";
                return t5;
              }, o3 = 0, i2 = {}; ; ) {
                var a2 = r5.read();
                if (-1 == a2)
                  break;
                var s2 = n4(), u2 = n4() << 8 | n4();
                i2[String.fromCharCode(a2 << 8 | s2)] = u2, o3 += 1;
              }
              if (o3 != e4)
                throw o3 + " != " + e4;
              return i2;
            }(), n3 = "?".charCodeAt(0);
            return function(t5) {
              for (var e5 = [], o3 = 0; o3 < t5.length; o3 += 1) {
                var i2 = t5.charCodeAt(o3);
                if (i2 < 128)
                  e5.push(i2);
                else {
                  var a2 = r4[t5.charAt(o3)];
                  "number" == typeof a2 ? (255 & a2) == a2 ? e5.push(a2) : (e5.push(a2 >>> 8), e5.push(255 & a2)) : e5.push(n3);
                }
              }
              return e5;
            };
          };
          var e3, r3, n2, o2, i, a = { L: 1, M: 0, Q: 3, H: 2 }, s = (e3 = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], r3 = 1335, n2 = 7973, i = function(t4) {
            for (var e4 = 0; 0 != t4; )
              e4 += 1, t4 >>>= 1;
            return e4;
          }, (o2 = {}).getBCHTypeInfo = function(t4) {
            for (var e4 = t4 << 10; i(e4) - i(r3) >= 0; )
              e4 ^= r3 << i(e4) - i(r3);
            return 21522 ^ (t4 << 10 | e4);
          }, o2.getBCHTypeNumber = function(t4) {
            for (var e4 = t4 << 12; i(e4) - i(n2) >= 0; )
              e4 ^= n2 << i(e4) - i(n2);
            return t4 << 12 | e4;
          }, o2.getPatternPosition = function(t4) {
            return e3[t4 - 1];
          }, o2.getMaskFunction = function(t4) {
            switch (t4) {
              case 0:
                return function(t5, e4) {
                  return (t5 + e4) % 2 == 0;
                };
              case 1:
                return function(t5, e4) {
                  return t5 % 2 == 0;
                };
              case 2:
                return function(t5, e4) {
                  return e4 % 3 == 0;
                };
              case 3:
                return function(t5, e4) {
                  return (t5 + e4) % 3 == 0;
                };
              case 4:
                return function(t5, e4) {
                  return (Math.floor(t5 / 2) + Math.floor(e4 / 3)) % 2 == 0;
                };
              case 5:
                return function(t5, e4) {
                  return t5 * e4 % 2 + t5 * e4 % 3 == 0;
                };
              case 6:
                return function(t5, e4) {
                  return (t5 * e4 % 2 + t5 * e4 % 3) % 2 == 0;
                };
              case 7:
                return function(t5, e4) {
                  return (t5 * e4 % 3 + (t5 + e4) % 2) % 2 == 0;
                };
              default:
                throw "bad maskPattern:" + t4;
            }
          }, o2.getErrorCorrectPolynomial = function(t4) {
            for (var e4 = h([1], 0), r4 = 0; r4 < t4; r4 += 1)
              e4 = e4.multiply(h([1, u.gexp(r4)], 0));
            return e4;
          }, o2.getLengthInBits = function(t4, e4) {
            if (1 <= e4 && e4 < 10)
              switch (t4) {
                case 1:
                  return 10;
                case 2:
                  return 9;
                case 4:
                case 8:
                  return 8;
                default:
                  throw "mode:" + t4;
              }
            else if (e4 < 27)
              switch (t4) {
                case 1:
                  return 12;
                case 2:
                  return 11;
                case 4:
                  return 16;
                case 8:
                  return 10;
                default:
                  throw "mode:" + t4;
              }
            else {
              if (!(e4 < 41))
                throw "type:" + e4;
              switch (t4) {
                case 1:
                  return 14;
                case 2:
                  return 13;
                case 4:
                  return 16;
                case 8:
                  return 12;
                default:
                  throw "mode:" + t4;
              }
            }
          }, o2.getLostPoint = function(t4) {
            for (var e4 = t4.getModuleCount(), r4 = 0, n3 = 0; n3 < e4; n3 += 1)
              for (var o3 = 0; o3 < e4; o3 += 1) {
                for (var i2 = 0, a2 = t4.isDark(n3, o3), s2 = -1; s2 <= 1; s2 += 1)
                  if (!(n3 + s2 < 0 || e4 <= n3 + s2))
                    for (var u2 = -1; u2 <= 1; u2 += 1)
                      o3 + u2 < 0 || e4 <= o3 + u2 || 0 == s2 && 0 == u2 || a2 == t4.isDark(n3 + s2, o3 + u2) && (i2 += 1);
                i2 > 5 && (r4 += 3 + i2 - 5);
              }
            for (n3 = 0; n3 < e4 - 1; n3 += 1)
              for (o3 = 0; o3 < e4 - 1; o3 += 1) {
                var h2 = 0;
                t4.isDark(n3, o3) && (h2 += 1), t4.isDark(n3 + 1, o3) && (h2 += 1), t4.isDark(n3, o3 + 1) && (h2 += 1), t4.isDark(n3 + 1, o3 + 1) && (h2 += 1), 0 != h2 && 4 != h2 || (r4 += 3);
              }
            for (n3 = 0; n3 < e4; n3 += 1)
              for (o3 = 0; o3 < e4 - 6; o3 += 1)
                t4.isDark(n3, o3) && !t4.isDark(n3, o3 + 1) && t4.isDark(n3, o3 + 2) && t4.isDark(n3, o3 + 3) && t4.isDark(n3, o3 + 4) && !t4.isDark(n3, o3 + 5) && t4.isDark(n3, o3 + 6) && (r4 += 40);
            for (o3 = 0; o3 < e4; o3 += 1)
              for (n3 = 0; n3 < e4 - 6; n3 += 1)
                t4.isDark(n3, o3) && !t4.isDark(n3 + 1, o3) && t4.isDark(n3 + 2, o3) && t4.isDark(n3 + 3, o3) && t4.isDark(n3 + 4, o3) && !t4.isDark(n3 + 5, o3) && t4.isDark(n3 + 6, o3) && (r4 += 40);
            var c2 = 0;
            for (o3 = 0; o3 < e4; o3 += 1)
              for (n3 = 0; n3 < e4; n3 += 1)
                t4.isDark(n3, o3) && (c2 += 1);
            return r4 + Math.abs(100 * c2 / e4 / e4 - 50) / 5 * 10;
          }, o2), u = function() {
            for (var t4 = new Array(256), e4 = new Array(256), r4 = 0; r4 < 8; r4 += 1)
              t4[r4] = 1 << r4;
            for (r4 = 8; r4 < 256; r4 += 1)
              t4[r4] = t4[r4 - 4] ^ t4[r4 - 5] ^ t4[r4 - 6] ^ t4[r4 - 8];
            for (r4 = 0; r4 < 255; r4 += 1)
              e4[t4[r4]] = r4;
            return { glog: function(t5) {
              if (t5 < 1)
                throw "glog(" + t5 + ")";
              return e4[t5];
            }, gexp: function(e5) {
              for (; e5 < 0; )
                e5 += 255;
              for (; e5 >= 256; )
                e5 -= 255;
              return t4[e5];
            } };
          }();
          function h(t4, e4) {
            if (void 0 === t4.length)
              throw t4.length + "/" + e4;
            var r4 = function() {
              for (var r5 = 0; r5 < t4.length && 0 == t4[r5]; )
                r5 += 1;
              for (var n4 = new Array(t4.length - r5 + e4), o3 = 0; o3 < t4.length - r5; o3 += 1)
                n4[o3] = t4[o3 + r5];
              return n4;
            }(), n3 = { getAt: function(t5) {
              return r4[t5];
            }, getLength: function() {
              return r4.length;
            }, multiply: function(t5) {
              for (var e5 = new Array(n3.getLength() + t5.getLength() - 1), r5 = 0; r5 < n3.getLength(); r5 += 1)
                for (var o3 = 0; o3 < t5.getLength(); o3 += 1)
                  e5[r5 + o3] ^= u.gexp(u.glog(n3.getAt(r5)) + u.glog(t5.getAt(o3)));
              return h(e5, 0);
            }, mod: function(t5) {
              if (n3.getLength() - t5.getLength() < 0)
                return n3;
              for (var e5 = u.glog(n3.getAt(0)) - u.glog(t5.getAt(0)), r5 = new Array(n3.getLength()), o3 = 0; o3 < n3.getLength(); o3 += 1)
                r5[o3] = n3.getAt(o3);
              for (o3 = 0; o3 < t5.getLength(); o3 += 1)
                r5[o3] ^= u.gexp(u.glog(t5.getAt(o3)) + e5);
              return h(r5, 0).mod(t5);
            } };
            return n3;
          }
          var c = function() {
            var t4 = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], e4 = function(t5, e5) {
              var r5 = {};
              return r5.totalCount = t5, r5.dataCount = e5, r5;
            }, r4 = { getRSBlocks: function(r5, n3) {
              var o3 = function(e5, r6) {
                switch (r6) {
                  case a.L:
                    return t4[4 * (e5 - 1) + 0];
                  case a.M:
                    return t4[4 * (e5 - 1) + 1];
                  case a.Q:
                    return t4[4 * (e5 - 1) + 2];
                  case a.H:
                    return t4[4 * (e5 - 1) + 3];
                  default:
                    return;
                }
              }(r5, n3);
              if (void 0 === o3)
                throw "bad rs block @ typeNumber:" + r5 + "/errorCorrectionLevel:" + n3;
              for (var i2 = o3.length / 3, s2 = [], u2 = 0; u2 < i2; u2 += 1)
                for (var h2 = o3[3 * u2 + 0], c2 = o3[3 * u2 + 1], l2 = o3[3 * u2 + 2], d2 = 0; d2 < h2; d2 += 1)
                  s2.push(e4(c2, l2));
              return s2;
            } };
            return r4;
          }(), l = function() {
            var t4 = [], e4 = 0, r4 = { getBuffer: function() {
              return t4;
            }, getAt: function(e5) {
              var r5 = Math.floor(e5 / 8);
              return 1 == (t4[r5] >>> 7 - e5 % 8 & 1);
            }, put: function(t5, e5) {
              for (var n3 = 0; n3 < e5; n3 += 1)
                r4.putBit(1 == (t5 >>> e5 - n3 - 1 & 1));
            }, getLengthInBits: function() {
              return e4;
            }, putBit: function(r5) {
              var n3 = Math.floor(e4 / 8);
              t4.length <= n3 && t4.push(0), r5 && (t4[n3] |= 128 >>> e4 % 8), e4 += 1;
            } };
            return r4;
          }, d = function(t4) {
            var e4 = t4, r4 = { getMode: function() {
              return 1;
            }, getLength: function(t5) {
              return e4.length;
            }, write: function(t5) {
              for (var r5 = e4, o4 = 0; o4 + 2 < r5.length; )
                t5.put(n3(r5.substring(o4, o4 + 3)), 10), o4 += 3;
              o4 < r5.length && (r5.length - o4 == 1 ? t5.put(n3(r5.substring(o4, o4 + 1)), 4) : r5.length - o4 == 2 && t5.put(n3(r5.substring(o4, o4 + 2)), 7));
            } }, n3 = function(t5) {
              for (var e5 = 0, r5 = 0; r5 < t5.length; r5 += 1)
                e5 = 10 * e5 + o3(t5.charAt(r5));
              return e5;
            }, o3 = function(t5) {
              if ("0" <= t5 && t5 <= "9")
                return t5.charCodeAt(0) - "0".charCodeAt(0);
              throw "illegal char :" + t5;
            };
            return r4;
          }, f = function(t4) {
            var e4 = t4, r4 = { getMode: function() {
              return 2;
            }, getLength: function(t5) {
              return e4.length;
            }, write: function(t5) {
              for (var r5 = e4, o3 = 0; o3 + 1 < r5.length; )
                t5.put(45 * n3(r5.charAt(o3)) + n3(r5.charAt(o3 + 1)), 11), o3 += 2;
              o3 < r5.length && t5.put(n3(r5.charAt(o3)), 6);
            } }, n3 = function(t5) {
              if ("0" <= t5 && t5 <= "9")
                return t5.charCodeAt(0) - "0".charCodeAt(0);
              if ("A" <= t5 && t5 <= "Z")
                return t5.charCodeAt(0) - "A".charCodeAt(0) + 10;
              switch (t5) {
                case " ":
                  return 36;
                case "$":
                  return 37;
                case "%":
                  return 38;
                case "*":
                  return 39;
                case "+":
                  return 40;
                case "-":
                  return 41;
                case ".":
                  return 42;
                case "/":
                  return 43;
                case ":":
                  return 44;
                default:
                  throw "illegal char :" + t5;
              }
            };
            return r4;
          }, g = function(e4) {
            var r4 = t3.stringToBytes(e4);
            return { getMode: function() {
              return 4;
            }, getLength: function(t4) {
              return r4.length;
            }, write: function(t4) {
              for (var e5 = 0; e5 < r4.length; e5 += 1)
                t4.put(r4[e5], 8);
            } };
          }, p = function(e4) {
            var r4 = t3.stringToBytesFuncs.SJIS;
            if (!r4)
              throw "sjis not supported.";
            !function(t4, e5) {
              var n4 = r4("友");
              if (2 != n4.length || 38726 != (n4[0] << 8 | n4[1]))
                throw "sjis not supported.";
            }();
            var n3 = r4(e4);
            return { getMode: function() {
              return 8;
            }, getLength: function(t4) {
              return ~~(n3.length / 2);
            }, write: function(t4) {
              for (var e5 = n3, r5 = 0; r5 + 1 < e5.length; ) {
                var o3 = (255 & e5[r5]) << 8 | 255 & e5[r5 + 1];
                if (33088 <= o3 && o3 <= 40956)
                  o3 -= 33088;
                else {
                  if (!(57408 <= o3 && o3 <= 60351))
                    throw "illegal char at " + (r5 + 1) + "/" + o3;
                  o3 -= 49472;
                }
                o3 = 192 * (o3 >>> 8 & 255) + (255 & o3), t4.put(o3, 13), r5 += 2;
              }
              if (r5 < e5.length)
                throw "illegal char at " + (r5 + 1);
            } };
          }, v = function() {
            var t4 = [], e4 = { writeByte: function(e5) {
              t4.push(255 & e5);
            }, writeShort: function(t5) {
              e4.writeByte(t5), e4.writeByte(t5 >>> 8);
            }, writeBytes: function(t5, r4, n3) {
              r4 = r4 || 0, n3 = n3 || t5.length;
              for (var o3 = 0; o3 < n3; o3 += 1)
                e4.writeByte(t5[o3 + r4]);
            }, writeString: function(t5) {
              for (var r4 = 0; r4 < t5.length; r4 += 1)
                e4.writeByte(t5.charCodeAt(r4));
            }, toByteArray: function() {
              return t4;
            }, toString: function() {
              var e5 = "";
              e5 += "[";
              for (var r4 = 0; r4 < t4.length; r4 += 1)
                r4 > 0 && (e5 += ","), e5 += t4[r4];
              return e5 + "]";
            } };
            return e4;
          }, w = function(t4) {
            var e4 = t4, r4 = 0, n3 = 0, o3 = 0, i2 = { read: function() {
              for (; o3 < 8; ) {
                if (r4 >= e4.length) {
                  if (0 == o3)
                    return -1;
                  throw "unexpected end of file./" + o3;
                }
                var t5 = e4.charAt(r4);
                if (r4 += 1, "=" == t5)
                  return o3 = 0, -1;
                t5.match(/^\s$/) || (n3 = n3 << 6 | a2(t5.charCodeAt(0)), o3 += 6);
              }
              var i3 = n3 >>> o3 - 8 & 255;
              return o3 -= 8, i3;
            } }, a2 = function(t5) {
              if (65 <= t5 && t5 <= 90)
                return t5 - 65;
              if (97 <= t5 && t5 <= 122)
                return t5 - 97 + 26;
              if (48 <= t5 && t5 <= 57)
                return t5 - 48 + 52;
              if (43 == t5)
                return 62;
              if (47 == t5)
                return 63;
              throw "c:" + t5;
            };
            return i2;
          }, y = function(t4, e4, r4) {
            for (var n3 = function(t5, e5) {
              var r5 = t5, n4 = e5, o4 = new Array(t5 * e5), i3 = { setPixel: function(t6, e6, n5) {
                o4[e6 * r5 + t6] = n5;
              }, write: function(t6) {
                t6.writeString("GIF87a"), t6.writeShort(r5), t6.writeShort(n4), t6.writeByte(128), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(255), t6.writeByte(255), t6.writeByte(255), t6.writeString(","), t6.writeShort(0), t6.writeShort(0), t6.writeShort(r5), t6.writeShort(n4), t6.writeByte(0);
                var e6 = a3(2);
                t6.writeByte(2);
                for (var o5 = 0; e6.length - o5 > 255; )
                  t6.writeByte(255), t6.writeBytes(e6, o5, 255), o5 += 255;
                t6.writeByte(e6.length - o5), t6.writeBytes(e6, o5, e6.length - o5), t6.writeByte(0), t6.writeString(";");
              } }, a3 = function(t6) {
                for (var e6 = 1 << t6, r6 = 1 + (1 << t6), n5 = t6 + 1, i4 = s3(), a4 = 0; a4 < e6; a4 += 1)
                  i4.add(String.fromCharCode(a4));
                i4.add(String.fromCharCode(e6)), i4.add(String.fromCharCode(r6));
                var u3, h3, c2, l2 = v(), d2 = (u3 = l2, h3 = 0, c2 = 0, { write: function(t7, e7) {
                  if (t7 >>> e7 != 0)
                    throw "length over";
                  for (; h3 + e7 >= 8; )
                    u3.writeByte(255 & (t7 << h3 | c2)), e7 -= 8 - h3, t7 >>>= 8 - h3, c2 = 0, h3 = 0;
                  c2 |= t7 << h3, h3 += e7;
                }, flush: function() {
                  h3 > 0 && u3.writeByte(c2);
                } });
                d2.write(e6, n5);
                var f2 = 0, g2 = String.fromCharCode(o4[f2]);
                for (f2 += 1; f2 < o4.length; ) {
                  var p2 = String.fromCharCode(o4[f2]);
                  f2 += 1, i4.contains(g2 + p2) ? g2 += p2 : (d2.write(i4.indexOf(g2), n5), i4.size() < 4095 && (i4.size() == 1 << n5 && (n5 += 1), i4.add(g2 + p2)), g2 = p2);
                }
                return d2.write(i4.indexOf(g2), n5), d2.write(r6, n5), d2.flush(), l2.toByteArray();
              }, s3 = function() {
                var t6 = {}, e6 = 0, r6 = { add: function(n5) {
                  if (r6.contains(n5))
                    throw "dup key:" + n5;
                  t6[n5] = e6, e6 += 1;
                }, size: function() {
                  return e6;
                }, indexOf: function(e7) {
                  return t6[e7];
                }, contains: function(e7) {
                  return void 0 !== t6[e7];
                } };
                return r6;
              };
              return i3;
            }(t4, e4), o3 = 0; o3 < e4; o3 += 1)
              for (var i2 = 0; i2 < t4; i2 += 1)
                n3.setPixel(i2, o3, r4(i2, o3));
            var a2 = v();
            n3.write(a2);
            for (var s2 = function() {
              var t5 = 0, e5 = 0, r5 = 0, n4 = "", o4 = {}, i3 = function(t6) {
                n4 += String.fromCharCode(a3(63 & t6));
              }, a3 = function(t6) {
                if (t6 < 0)
                  ;
                else {
                  if (t6 < 26)
                    return 65 + t6;
                  if (t6 < 52)
                    return t6 - 26 + 97;
                  if (t6 < 62)
                    return t6 - 52 + 48;
                  if (62 == t6)
                    return 43;
                  if (63 == t6)
                    return 47;
                }
                throw "n:" + t6;
              };
              return o4.writeByte = function(n5) {
                for (t5 = t5 << 8 | 255 & n5, e5 += 8, r5 += 1; e5 >= 6; )
                  i3(t5 >>> e5 - 6), e5 -= 6;
              }, o4.flush = function() {
                if (e5 > 0 && (i3(t5 << 6 - e5), t5 = 0, e5 = 0), r5 % 3 != 0)
                  for (var o5 = 3 - r5 % 3, a4 = 0; a4 < o5; a4 += 1)
                    n4 += "=";
              }, o4.toString = function() {
                return n4;
              }, o4;
            }(), u2 = a2.toByteArray(), h2 = 0; h2 < u2.length; h2 += 1)
              s2.writeByte(u2[h2]);
            return s2.flush(), "data:image/gif;base64," + s2;
          };
          return t3;
        }();
        o.stringToBytesFuncs["UTF-8"] = function(t3) {
          return function(t4) {
            for (var e3 = [], r3 = 0; r3 < t4.length; r3++) {
              var n2 = t4.charCodeAt(r3);
              n2 < 128 ? e3.push(n2) : n2 < 2048 ? e3.push(192 | n2 >> 6, 128 | 63 & n2) : n2 < 55296 || n2 >= 57344 ? e3.push(224 | n2 >> 12, 128 | n2 >> 6 & 63, 128 | 63 & n2) : (r3++, n2 = 65536 + ((1023 & n2) << 10 | 1023 & t4.charCodeAt(r3)), e3.push(240 | n2 >> 18, 128 | n2 >> 12 & 63, 128 | n2 >> 6 & 63, 128 | 63 & n2));
            }
            return e3;
          }(t3);
        }, void 0 === (n = "function" == typeof (r2 = function() {
          return o;
        }) ? r2.apply(e2, []) : r2) || (t2.exports = n);
      }, 676: (t2, e2, r2) => {
        r2.d(e2, { default: () => q });
        var n = function() {
          return (n = Object.assign || function(t3) {
            for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
              for (var o2 in e3 = arguments[r3])
                Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
            return t3;
          }).apply(this, arguments);
        }, o = function() {
          for (var t3 = 0, e3 = 0, r3 = arguments.length; e3 < r3; e3++)
            t3 += arguments[e3].length;
          var n2 = Array(t3), o2 = 0;
          for (e3 = 0; e3 < r3; e3++)
            for (var i2 = arguments[e3], a2 = 0, s2 = i2.length; a2 < s2; a2++, o2++)
              n2[o2] = i2[a2];
          return n2;
        }, i = function(t3) {
          return !!t3 && "object" == typeof t3 && !Array.isArray(t3);
        };
        function a(t3) {
          for (var e3 = [], r3 = 1; r3 < arguments.length; r3++)
            e3[r3 - 1] = arguments[r3];
          if (!e3.length)
            return t3;
          var s2 = e3.shift();
          return void 0 !== s2 && i(t3) && i(s2) ? (t3 = n({}, t3), Object.keys(s2).forEach(function(e4) {
            var r4 = t3[e4], n2 = s2[e4];
            Array.isArray(r4) && Array.isArray(n2) ? t3[e4] = n2 : i(r4) && i(n2) ? t3[e4] = a(Object.assign({}, r4), n2) : t3[e4] = n2;
          }), a.apply(void 0, o([t3], e3))) : t3;
        }
        function s(t3, e3) {
          var r3 = document.createElement("a");
          r3.download = e3, r3.href = t3, document.body.appendChild(r3), r3.click(), document.body.removeChild(r3);
        }
        function u(t3) {
          return e3 = this, r3 = void 0, o2 = function() {
            return function(t4, e4) {
              var r4, n3, o3, i2, a2 = { label: 0, sent: function() {
                if (1 & o3[0])
                  throw o3[1];
                return o3[1];
              }, trys: [], ops: [] };
              return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
                return this;
              }), i2;
              function s2(i3) {
                return function(s3) {
                  return function(i4) {
                    if (r4)
                      throw new TypeError("Generator is already executing.");
                    for (; a2; )
                      try {
                        if (r4 = 1, n3 && (o3 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o3 = n3.return) && o3.call(n3), 0) : n3.next) && !(o3 = o3.call(n3, i4[1])).done)
                          return o3;
                        switch (n3 = 0, o3 && (i4 = [2 & i4[0], o3.value]), i4[0]) {
                          case 0:
                          case 1:
                            o3 = i4;
                            break;
                          case 4:
                            return a2.label++, { value: i4[1], done: false };
                          case 5:
                            a2.label++, n3 = i4[1], i4 = [0];
                            continue;
                          case 7:
                            i4 = a2.ops.pop(), a2.trys.pop();
                            continue;
                          default:
                            if (!((o3 = (o3 = a2.trys).length > 0 && o3[o3.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                              a2 = 0;
                              continue;
                            }
                            if (3 === i4[0] && (!o3 || i4[1] > o3[0] && i4[1] < o3[3])) {
                              a2.label = i4[1];
                              break;
                            }
                            if (6 === i4[0] && a2.label < o3[1]) {
                              a2.label = o3[1], o3 = i4;
                              break;
                            }
                            if (o3 && a2.label < o3[2]) {
                              a2.label = o3[2], a2.ops.push(i4);
                              break;
                            }
                            o3[2] && a2.ops.pop(), a2.trys.pop();
                            continue;
                        }
                        i4 = e4.call(t4, a2);
                      } catch (t5) {
                        i4 = [6, t5], n3 = 0;
                      } finally {
                        r4 = o3 = 0;
                      }
                    if (5 & i4[0])
                      throw i4[1];
                    return { value: i4[0] ? i4[1] : void 0, done: true };
                  }([i3, s3]);
                };
              }
            }(this, function(e4) {
              return [2, new Promise(function(e5) {
                var r4 = new XMLHttpRequest();
                r4.onload = function() {
                  var t4 = new FileReader();
                  t4.onloadend = function() {
                    e5(t4.result);
                  }, t4.readAsDataURL(r4.response);
                }, r4.open("GET", t3), r4.responseType = "blob", r4.send();
              })];
            });
          }, new ((n2 = void 0) || (n2 = Promise))(function(t4, i2) {
            function a2(t5) {
              try {
                u2(o2.next(t5));
              } catch (t6) {
                i2(t6);
              }
            }
            function s2(t5) {
              try {
                u2(o2.throw(t5));
              } catch (t6) {
                i2(t6);
              }
            }
            function u2(e4) {
              var r4;
              e4.done ? t4(e4.value) : (r4 = e4.value, r4 instanceof n2 ? r4 : new n2(function(t5) {
                t5(r4);
              })).then(a2, s2);
            }
            u2((o2 = o2.apply(e3, r3 || [])).next());
          });
          var e3, r3, n2, o2;
        }
        const h = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
        var c = function() {
          return (c = Object.assign || function(t3) {
            for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
              for (var o2 in e3 = arguments[r3])
                Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
            return t3;
          }).apply(this, arguments);
        };
        const l = function() {
          function t3(t4) {
            var e3 = t4.svg, r3 = t4.type;
            this._svg = e3, this._type = r3;
          }
          return t3.prototype.draw = function(t4, e3, r3, n2) {
            var o2;
            switch (this._type) {
              case "dots":
                o2 = this._drawDot;
                break;
              case "classy":
                o2 = this._drawClassy;
                break;
              case "classy-rounded":
                o2 = this._drawClassyRounded;
                break;
              case "rounded":
                o2 = this._drawRounded;
                break;
              case "extra-rounded":
                o2 = this._drawExtraRounded;
                break;
              case "square":
              default:
                o2 = this._drawSquare;
            }
            o2.call(this, { x: t4, y: e3, size: r3, getNeighbor: n2 });
          }, t3.prototype._rotateFigure = function(t4) {
            var e3, r3 = t4.x, n2 = t4.y, o2 = t4.size, i2 = t4.rotation, a2 = void 0 === i2 ? 0 : i2, s2 = r3 + o2 / 2, u2 = n2 + o2 / 2;
            (0, t4.draw)(), null === (e3 = this._element) || void 0 === e3 || e3.setAttribute("transform", "rotate(" + 180 * a2 / Math.PI + "," + s2 + "," + u2 + ")");
          }, t3.prototype._basicDot = function(t4) {
            var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
            this._rotateFigure(c(c({}, t4), { draw: function() {
              e3._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), e3._element.setAttribute("cx", String(n2 + r3 / 2)), e3._element.setAttribute("cy", String(o2 + r3 / 2)), e3._element.setAttribute("r", String(r3 / 2));
            } }));
          }, t3.prototype._basicSquare = function(t4) {
            var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
            this._rotateFigure(c(c({}, t4), { draw: function() {
              e3._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), e3._element.setAttribute("x", String(n2)), e3._element.setAttribute("y", String(o2)), e3._element.setAttribute("width", String(r3)), e3._element.setAttribute("height", String(r3));
            } }));
          }, t3.prototype._basicSideRounded = function(t4) {
            var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
            this._rotateFigure(c(c({}, t4), { draw: function() {
              e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, 0 " + -r3);
            } }));
          }, t3.prototype._basicCornerRounded = function(t4) {
            var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
            this._rotateFigure(c(c({}, t4), { draw: function() {
              e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 + "v " + -r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, " + -r3 / 2 + " " + -r3 / 2);
            } }));
          }, t3.prototype._basicCornerExtraRounded = function(t4) {
            var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
            this._rotateFigure(c(c({}, t4), { draw: function() {
              e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 + "a " + r3 + " " + r3 + ", 0, 0, 0, " + -r3 + " " + -r3);
            } }));
          }, t3.prototype._basicCornersRounded = function(t4) {
            var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
            this._rotateFigure(c(c({}, t4), { draw: function() {
              e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, " + r3 / 2 + " " + r3 / 2 + "h " + r3 / 2 + "v " + -r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, " + -r3 / 2 + " " + -r3 / 2);
            } }));
          }, t3.prototype._drawDot = function(t4) {
            var e3 = t4.x, r3 = t4.y, n2 = t4.size;
            this._basicDot({ x: e3, y: r3, size: n2, rotation: 0 });
          }, t3.prototype._drawSquare = function(t4) {
            var e3 = t4.x, r3 = t4.y, n2 = t4.size;
            this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 });
          }, t3.prototype._drawRounded = function(t4) {
            var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0, h2 = i2 + a2 + s2 + u2;
            if (0 !== h2)
              if (h2 > 2 || i2 && a2 || s2 && u2)
                this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 });
              else {
                if (2 === h2) {
                  var c2 = 0;
                  return i2 && s2 ? c2 = Math.PI / 2 : s2 && a2 ? c2 = Math.PI : a2 && u2 && (c2 = -Math.PI / 2), void this._basicCornerRounded({ x: e3, y: r3, size: n2, rotation: c2 });
                }
                if (1 === h2)
                  return c2 = 0, s2 ? c2 = Math.PI / 2 : a2 ? c2 = Math.PI : u2 && (c2 = -Math.PI / 2), void this._basicSideRounded({ x: e3, y: r3, size: n2, rotation: c2 });
              }
            else
              this._basicDot({ x: e3, y: r3, size: n2, rotation: 0 });
          }, t3.prototype._drawExtraRounded = function(t4) {
            var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0, h2 = i2 + a2 + s2 + u2;
            if (0 !== h2)
              if (h2 > 2 || i2 && a2 || s2 && u2)
                this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 });
              else {
                if (2 === h2) {
                  var c2 = 0;
                  return i2 && s2 ? c2 = Math.PI / 2 : s2 && a2 ? c2 = Math.PI : a2 && u2 && (c2 = -Math.PI / 2), void this._basicCornerExtraRounded({ x: e3, y: r3, size: n2, rotation: c2 });
                }
                if (1 === h2)
                  return c2 = 0, s2 ? c2 = Math.PI / 2 : a2 ? c2 = Math.PI : u2 && (c2 = -Math.PI / 2), void this._basicSideRounded({ x: e3, y: r3, size: n2, rotation: c2 });
              }
            else
              this._basicDot({ x: e3, y: r3, size: n2, rotation: 0 });
          }, t3.prototype._drawClassy = function(t4) {
            var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0;
            0 !== i2 + a2 + s2 + u2 ? i2 || s2 ? a2 || u2 ? this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 }) : this._basicCornerRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: e3, y: r3, size: n2, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 });
          }, t3.prototype._drawClassyRounded = function(t4) {
            var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0;
            0 !== i2 + a2 + s2 + u2 ? i2 || s2 ? a2 || u2 ? this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 }) : this._basicCornerExtraRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: e3, y: r3, size: n2, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 });
          }, t3;
        }();
        var d = function() {
          return (d = Object.assign || function(t3) {
            for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
              for (var o2 in e3 = arguments[r3])
                Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
            return t3;
          }).apply(this, arguments);
        };
        const f = function() {
          function t3(t4) {
            var e3 = t4.svg, r3 = t4.type;
            this._svg = e3, this._type = r3;
          }
          return t3.prototype.draw = function(t4, e3, r3, n2) {
            var o2;
            switch (this._type) {
              case "square":
                o2 = this._drawSquare;
                break;
              case "extra-rounded":
                o2 = this._drawExtraRounded;
                break;
              case "dot":
              default:
                o2 = this._drawDot;
            }
            o2.call(this, { x: t4, y: e3, size: r3, rotation: n2 });
          }, t3.prototype._rotateFigure = function(t4) {
            var e3, r3 = t4.x, n2 = t4.y, o2 = t4.size, i2 = t4.rotation, a2 = void 0 === i2 ? 0 : i2, s2 = r3 + o2 / 2, u2 = n2 + o2 / 2;
            (0, t4.draw)(), null === (e3 = this._element) || void 0 === e3 || e3.setAttribute("transform", "rotate(" + 180 * a2 / Math.PI + "," + s2 + "," + u2 + ")");
          }, t3.prototype._basicDot = function(t4) {
            var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y, i2 = r3 / 7;
            this._rotateFigure(d(d({}, t4), { draw: function() {
              e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("clip-rule", "evenodd"), e3._element.setAttribute("d", "M " + (n2 + r3 / 2) + " " + o2 + "a " + r3 / 2 + " " + r3 / 2 + " 0 1 0 0.1 0zm 0 " + i2 + "a " + (r3 / 2 - i2) + " " + (r3 / 2 - i2) + " 0 1 1 -0.1 0Z");
            } }));
          }, t3.prototype._basicSquare = function(t4) {
            var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y, i2 = r3 / 7;
            this._rotateFigure(d(d({}, t4), { draw: function() {
              e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("clip-rule", "evenodd"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 + "v " + -r3 + "zM " + (n2 + i2) + " " + (o2 + i2) + "h " + (r3 - 2 * i2) + "v " + (r3 - 2 * i2) + "h " + (2 * i2 - r3) + "z");
            } }));
          }, t3.prototype._basicExtraRounded = function(t4) {
            var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y, i2 = r3 / 7;
            this._rotateFigure(d(d({}, t4), { draw: function() {
              e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("clip-rule", "evenodd"), e3._element.setAttribute("d", "M " + n2 + " " + (o2 + 2.5 * i2) + "v " + 2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * i2 + " " + 2.5 * i2 + "h " + 2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * i2 + " " + 2.5 * -i2 + "v " + -2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * -i2 + " " + 2.5 * -i2 + "h " + -2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * -i2 + " " + 2.5 * i2 + "M " + (n2 + 2.5 * i2) + " " + (o2 + i2) + "h " + 2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * i2 + " " + 1.5 * i2 + "v " + 2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * -i2 + " " + 1.5 * i2 + "h " + -2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * -i2 + " " + 1.5 * -i2 + "v " + -2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * i2 + " " + 1.5 * -i2);
            } }));
          }, t3.prototype._drawDot = function(t4) {
            var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
            this._basicDot({ x: e3, y: r3, size: n2, rotation: o2 });
          }, t3.prototype._drawSquare = function(t4) {
            var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
            this._basicSquare({ x: e3, y: r3, size: n2, rotation: o2 });
          }, t3.prototype._drawExtraRounded = function(t4) {
            var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
            this._basicExtraRounded({ x: e3, y: r3, size: n2, rotation: o2 });
          }, t3;
        }();
        var g = function() {
          return (g = Object.assign || function(t3) {
            for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
              for (var o2 in e3 = arguments[r3])
                Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
            return t3;
          }).apply(this, arguments);
        };
        const p = function() {
          function t3(t4) {
            var e3 = t4.svg, r3 = t4.type;
            this._svg = e3, this._type = r3;
          }
          return t3.prototype.draw = function(t4, e3, r3, n2) {
            var o2;
            switch (this._type) {
              case "square":
                o2 = this._drawSquare;
                break;
              case "dot":
              default:
                o2 = this._drawDot;
            }
            o2.call(this, { x: t4, y: e3, size: r3, rotation: n2 });
          }, t3.prototype._rotateFigure = function(t4) {
            var e3, r3 = t4.x, n2 = t4.y, o2 = t4.size, i2 = t4.rotation, a2 = void 0 === i2 ? 0 : i2, s2 = r3 + o2 / 2, u2 = n2 + o2 / 2;
            (0, t4.draw)(), null === (e3 = this._element) || void 0 === e3 || e3.setAttribute("transform", "rotate(" + 180 * a2 / Math.PI + "," + s2 + "," + u2 + ")");
          }, t3.prototype._basicDot = function(t4) {
            var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
            this._rotateFigure(g(g({}, t4), { draw: function() {
              e3._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), e3._element.setAttribute("cx", String(n2 + r3 / 2)), e3._element.setAttribute("cy", String(o2 + r3 / 2)), e3._element.setAttribute("r", String(r3 / 2));
            } }));
          }, t3.prototype._basicSquare = function(t4) {
            var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
            this._rotateFigure(g(g({}, t4), { draw: function() {
              e3._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), e3._element.setAttribute("x", String(n2)), e3._element.setAttribute("y", String(o2)), e3._element.setAttribute("width", String(r3)), e3._element.setAttribute("height", String(r3));
            } }));
          }, t3.prototype._drawDot = function(t4) {
            var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
            this._basicDot({ x: e3, y: r3, size: n2, rotation: o2 });
          }, t3.prototype._drawSquare = function(t4) {
            var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
            this._basicSquare({ x: e3, y: r3, size: n2, rotation: o2 });
          }, t3;
        }(), v = "circle";
        var w = function(t3, e3, r3, n2) {
          return new (r3 || (r3 = Promise))(function(o2, i2) {
            function a2(t4) {
              try {
                u2(n2.next(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function s2(t4) {
              try {
                u2(n2.throw(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function u2(t4) {
              var e4;
              t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3(function(t5) {
                t5(e4);
              })).then(a2, s2);
            }
            u2((n2 = n2.apply(t3, e3 || [])).next());
          });
        }, y = function(t3, e3) {
          var r3, n2, o2, i2, a2 = { label: 0, sent: function() {
            if (1 & o2[0])
              throw o2[1];
            return o2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (r3)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (r3 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done)
                      return o2;
                    switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                      case 0:
                      case 1:
                        o2 = i4;
                        break;
                      case 4:
                        return a2.label++, { value: i4[1], done: false };
                      case 5:
                        a2.label++, n2 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          a2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                          a2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && a2.label < o2[1]) {
                          a2.label = o2[1], o2 = i4;
                          break;
                        }
                        if (o2 && a2.label < o2[2]) {
                          a2.label = o2[2], a2.ops.push(i4);
                          break;
                        }
                        o2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    i4 = e3.call(t3, a2);
                  } catch (t4) {
                    i4 = [6, t4], n2 = 0;
                  } finally {
                    r3 = o2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        }, m = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]], b = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        const _ = function() {
          function t3(t4) {
            this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(t4.width)), this._element.setAttribute("height", String(t4.height)), this._defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._options = t4;
          }
          return Object.defineProperty(t3.prototype, "width", { get: function() {
            return this._options.width;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "height", { get: function() {
            return this._options.height;
          }, enumerable: false, configurable: true }), t3.prototype.getElement = function() {
            return this._element;
          }, t3.prototype.drawQR = function(t4) {
            return w(this, void 0, void 0, function() {
              var e3, r3, n2, o2, i2, a2, s2, u2, c2, l2, d2 = this;
              return y(this, function(f2) {
                switch (f2.label) {
                  case 0:
                    return e3 = t4.getModuleCount(), r3 = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, n2 = this._options.shape === v ? r3 / Math.sqrt(2) : r3, o2 = Math.floor(n2 / e3), i2 = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 }, this._qr = t4, this._options.image ? [4, this.loadImage()] : [3, 2];
                  case 1:
                    if (f2.sent(), !this._image)
                      return [2];
                    a2 = this._options, s2 = a2.imageOptions, u2 = a2.qrOptions, c2 = s2.imageSize * h[u2.errorCorrectionLevel], l2 = Math.floor(c2 * e3 * e3), i2 = function(t5) {
                      var e4 = t5.originalHeight, r4 = t5.originalWidth, n3 = t5.maxHiddenDots, o3 = t5.maxHiddenAxisDots, i3 = t5.dotSize, a3 = { x: 0, y: 0 }, s3 = { x: 0, y: 0 };
                      if (e4 <= 0 || r4 <= 0 || n3 <= 0 || i3 <= 0)
                        return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                      var u3 = e4 / r4;
                      return a3.x = Math.floor(Math.sqrt(n3 / u3)), a3.x <= 0 && (a3.x = 1), o3 && o3 < a3.x && (a3.x = o3), a3.x % 2 == 0 && a3.x--, s3.x = a3.x * i3, a3.y = 1 + 2 * Math.ceil((a3.x * u3 - 1) / 2), s3.y = Math.round(s3.x * u3), (a3.y * a3.x > n3 || o3 && o3 < a3.y) && (o3 && o3 < a3.y ? (a3.y = o3, a3.y % 2 == 0 && a3.x--) : a3.y -= 2, s3.y = a3.y * i3, a3.x = 1 + 2 * Math.ceil((a3.y / u3 - 1) / 2), s3.x = Math.round(s3.y / u3)), { height: s3.y, width: s3.x, hideYDots: a3.y, hideXDots: a3.x };
                    }({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: l2, maxHiddenAxisDots: e3 - 14, dotSize: o2 }), f2.label = 2;
                  case 2:
                    return this.drawBackground(), this.drawDots(function(t5, r4) {
                      var n3, o3, a3, s3, u3, h2;
                      return !(d2._options.imageOptions.hideBackgroundDots && t5 >= (e3 - i2.hideXDots) / 2 && t5 < (e3 + i2.hideXDots) / 2 && r4 >= (e3 - i2.hideYDots) / 2 && r4 < (e3 + i2.hideYDots) / 2 || (null === (n3 = m[t5]) || void 0 === n3 ? void 0 : n3[r4]) || (null === (o3 = m[t5 - e3 + 7]) || void 0 === o3 ? void 0 : o3[r4]) || (null === (a3 = m[t5]) || void 0 === a3 ? void 0 : a3[r4 - e3 + 7]) || (null === (s3 = b[t5]) || void 0 === s3 ? void 0 : s3[r4]) || (null === (u3 = b[t5 - e3 + 7]) || void 0 === u3 ? void 0 : u3[r4]) || (null === (h2 = b[t5]) || void 0 === h2 ? void 0 : h2[r4 - e3 + 7]));
                    }), this.drawCorners(), this._options.image ? [4, this.drawImage({ width: i2.width, height: i2.height, count: e3, dotSize: o2 })] : [3, 4];
                  case 3:
                    f2.sent(), f2.label = 4;
                  case 4:
                    return [2];
                }
              });
            });
          }, t3.prototype.drawBackground = function() {
            var t4, e3, r3, n2 = this._element, o2 = this._options;
            if (n2) {
              var i2 = null === (t4 = o2.backgroundOptions) || void 0 === t4 ? void 0 : t4.gradient, a2 = null === (e3 = o2.backgroundOptions) || void 0 === e3 ? void 0 : e3.color;
              if ((i2 || a2) && this._createColor({ options: i2, color: a2, additionalRotation: 0, x: 0, y: 0, height: o2.height, width: o2.width, name: "background-color" }), null === (r3 = o2.backgroundOptions) || void 0 === r3 ? void 0 : r3.round) {
                var s2 = Math.min(o2.width, o2.height), u2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this._backgroundClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", "clip-path-background-color"), this._defs.appendChild(this._backgroundClipPath), u2.setAttribute("x", String((o2.width - s2) / 2)), u2.setAttribute("y", String((o2.height - s2) / 2)), u2.setAttribute("width", String(s2)), u2.setAttribute("height", String(s2)), u2.setAttribute("rx", String(s2 / 2 * o2.backgroundOptions.round)), this._backgroundClipPath.appendChild(u2);
              }
            }
          }, t3.prototype.drawDots = function(t4) {
            var e3, r3, n2 = this;
            if (!this._qr)
              throw "QR code is not defined";
            var o2 = this._options, i2 = this._qr.getModuleCount();
            if (i2 > o2.width || i2 > o2.height)
              throw "The canvas is too small.";
            var a2 = Math.min(o2.width, o2.height) - 2 * o2.margin, s2 = o2.shape === v ? a2 / Math.sqrt(2) : a2, u2 = Math.floor(s2 / i2), h2 = Math.floor((o2.width - i2 * u2) / 2), c2 = Math.floor((o2.height - i2 * u2) / 2), d2 = new l({ svg: this._element, type: o2.dotsOptions.type });
            this._dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", "clip-path-dot-color"), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: null === (e3 = o2.dotsOptions) || void 0 === e3 ? void 0 : e3.gradient, color: o2.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: o2.height, width: o2.width, name: "dot-color" });
            for (var f2 = function(e4) {
              for (var o3 = function(o4) {
                return t4 && !t4(e4, o4) ? "continue" : (null === (r3 = g2._qr) || void 0 === r3 ? void 0 : r3.isDark(e4, o4)) ? (d2.draw(h2 + e4 * u2, c2 + o4 * u2, u2, function(r4, a4) {
                  return !(e4 + r4 < 0 || o4 + a4 < 0 || e4 + r4 >= i2 || o4 + a4 >= i2) && !(t4 && !t4(e4 + r4, o4 + a4)) && !!n2._qr && n2._qr.isDark(e4 + r4, o4 + a4);
                }), void (d2._element && g2._dotsClipPath && g2._dotsClipPath.appendChild(d2._element))) : "continue";
              }, a3 = 0; a3 < i2; a3++)
                o3(a3);
            }, g2 = this, p2 = 0; p2 < i2; p2++)
              f2(p2);
            if (o2.shape === v) {
              var w2 = Math.floor((a2 / u2 - i2) / 2), y2 = i2 + 2 * w2, m2 = h2 - w2 * u2, b2 = c2 - w2 * u2, _2 = [], x2 = Math.floor(y2 / 2);
              for (p2 = 0; p2 < y2; p2++) {
                _2[p2] = [];
                for (var S2 = 0; S2 < y2; S2++)
                  p2 >= w2 - 1 && p2 <= y2 - w2 && S2 >= w2 - 1 && S2 <= y2 - w2 || Math.sqrt((p2 - x2) * (p2 - x2) + (S2 - x2) * (S2 - x2)) > x2 ? _2[p2][S2] = 0 : _2[p2][S2] = this._qr.isDark(S2 - 2 * w2 < 0 ? S2 : S2 >= i2 ? S2 - 2 * w2 : S2 - w2, p2 - 2 * w2 < 0 ? p2 : p2 >= i2 ? p2 - 2 * w2 : p2 - w2) ? 1 : 0;
              }
              var M2 = function(t5) {
                for (var e4 = function(e5) {
                  if (!_2[t5][e5])
                    return "continue";
                  d2.draw(m2 + t5 * u2, b2 + e5 * u2, u2, function(r5, n3) {
                    var o3;
                    return !!(null === (o3 = _2[t5 + r5]) || void 0 === o3 ? void 0 : o3[e5 + n3]);
                  }), d2._element && C2._dotsClipPath && C2._dotsClipPath.appendChild(d2._element);
                }, r4 = 0; r4 < y2; r4++)
                  e4(r4);
              }, C2 = this;
              for (p2 = 0; p2 < y2; p2++)
                M2(p2);
            }
          }, t3.prototype.drawCorners = function() {
            var t4 = this;
            if (!this._qr)
              throw "QR code is not defined";
            var e3 = this._element, r3 = this._options;
            if (!e3)
              throw "Element code is not defined";
            var n2 = this._qr.getModuleCount(), o2 = Math.min(r3.width, r3.height) - 2 * r3.margin, i2 = r3.shape === v ? o2 / Math.sqrt(2) : o2, a2 = Math.floor(i2 / n2), s2 = 7 * a2, u2 = 3 * a2, h2 = Math.floor((r3.width - n2 * a2) / 2), c2 = Math.floor((r3.height - n2 * a2) / 2);
            [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(function(e4) {
              var o3, i3, d2, g2, v2, w2, y2, _2, x2, S2, M2, C2, A2 = e4[0], k2 = e4[1], O2 = e4[2], D2 = h2 + A2 * a2 * (n2 - 7), P2 = c2 + k2 * a2 * (n2 - 7), z2 = t4._dotsClipPath, B2 = t4._dotsClipPath;
              if (((null === (o3 = r3.cornersSquareOptions) || void 0 === o3 ? void 0 : o3.gradient) || (null === (i3 = r3.cornersSquareOptions) || void 0 === i3 ? void 0 : i3.color)) && ((z2 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-" + A2 + "-" + k2), t4._defs.appendChild(z2), t4._cornersSquareClipPath = t4._cornersDotClipPath = B2 = z2, t4._createColor({ options: null === (d2 = r3.cornersSquareOptions) || void 0 === d2 ? void 0 : d2.gradient, color: null === (g2 = r3.cornersSquareOptions) || void 0 === g2 ? void 0 : g2.color, additionalRotation: O2, x: D2, y: P2, height: s2, width: s2, name: "corners-square-color-" + A2 + "-" + k2 })), null === (v2 = r3.cornersSquareOptions) || void 0 === v2 ? void 0 : v2.type) {
                var q2 = new f({ svg: t4._element, type: r3.cornersSquareOptions.type });
                q2.draw(D2, P2, s2, O2), q2._element && z2 && z2.appendChild(q2._element);
              } else
                for (var I = new l({ svg: t4._element, type: r3.dotsOptions.type }), E = function(t5) {
                  for (var e5 = function(e6) {
                    if (!(null === (w2 = m[t5]) || void 0 === w2 ? void 0 : w2[e6]))
                      return "continue";
                    I.draw(D2 + t5 * a2, P2 + e6 * a2, a2, function(r5, n3) {
                      var o4;
                      return !!(null === (o4 = m[t5 + r5]) || void 0 === o4 ? void 0 : o4[e6 + n3]);
                    }), I._element && z2 && z2.appendChild(I._element);
                  }, r4 = 0; r4 < m[t5].length; r4++)
                    e5(r4);
                }, L = 0; L < m.length; L++)
                  E(L);
              if (((null === (y2 = r3.cornersDotOptions) || void 0 === y2 ? void 0 : y2.gradient) || (null === (_2 = r3.cornersDotOptions) || void 0 === _2 ? void 0 : _2.color)) && ((B2 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-" + A2 + "-" + k2), t4._defs.appendChild(B2), t4._cornersDotClipPath = B2, t4._createColor({ options: null === (x2 = r3.cornersDotOptions) || void 0 === x2 ? void 0 : x2.gradient, color: null === (S2 = r3.cornersDotOptions) || void 0 === S2 ? void 0 : S2.color, additionalRotation: O2, x: D2 + 2 * a2, y: P2 + 2 * a2, height: u2, width: u2, name: "corners-dot-color-" + A2 + "-" + k2 })), null === (M2 = r3.cornersDotOptions) || void 0 === M2 ? void 0 : M2.type) {
                var R = new p({ svg: t4._element, type: r3.cornersDotOptions.type });
                R.draw(D2 + 2 * a2, P2 + 2 * a2, u2, O2), R._element && B2 && B2.appendChild(R._element);
              } else {
                I = new l({ svg: t4._element, type: r3.dotsOptions.type });
                var N = function(t5) {
                  for (var e5 = function(e6) {
                    if (!(null === (C2 = b[t5]) || void 0 === C2 ? void 0 : C2[e6]))
                      return "continue";
                    I.draw(D2 + t5 * a2, P2 + e6 * a2, a2, function(r5, n3) {
                      var o4;
                      return !!(null === (o4 = b[t5 + r5]) || void 0 === o4 ? void 0 : o4[e6 + n3]);
                    }), I._element && B2 && B2.appendChild(I._element);
                  }, r4 = 0; r4 < b[t5].length; r4++)
                    e5(r4);
                };
                for (L = 0; L < b.length; L++)
                  N(L);
              }
            });
          }, t3.prototype.loadImage = function() {
            var t4 = this;
            return new Promise(function(e3, r3) {
              var n2 = t4._options, o2 = new Image();
              if (!n2.image)
                return r3("Image is not defined");
              "string" == typeof n2.imageOptions.crossOrigin && (o2.crossOrigin = n2.imageOptions.crossOrigin), t4._image = o2, o2.onload = function() {
                e3();
              }, o2.src = n2.image;
            });
          }, t3.prototype.drawImage = function(t4) {
            var e3 = t4.width, r3 = t4.height, n2 = t4.count, o2 = t4.dotSize;
            return w(this, void 0, void 0, function() {
              var t5, i2, a2, s2, h2, c2, l2, d2, f2;
              return y(this, function(g2) {
                switch (g2.label) {
                  case 0:
                    return t5 = this._options, i2 = Math.floor((t5.width - n2 * o2) / 2), a2 = Math.floor((t5.height - n2 * o2) / 2), s2 = i2 + t5.imageOptions.margin + (n2 * o2 - e3) / 2, h2 = a2 + t5.imageOptions.margin + (n2 * o2 - r3) / 2, c2 = e3 - 2 * t5.imageOptions.margin, l2 = r3 - 2 * t5.imageOptions.margin, (d2 = document.createElementNS("http://www.w3.org/2000/svg", "image")).setAttribute("x", String(s2)), d2.setAttribute("y", String(h2)), d2.setAttribute("width", c2 + "px"), d2.setAttribute("height", l2 + "px"), [4, u(t5.image || "")];
                  case 1:
                    return f2 = g2.sent(), d2.setAttribute("href", f2 || ""), this._element.appendChild(d2), [2];
                }
              });
            });
          }, t3.prototype._createColor = function(t4) {
            var e3 = t4.options, r3 = t4.color, n2 = t4.additionalRotation, o2 = t4.x, i2 = t4.y, a2 = t4.height, s2 = t4.width, u2 = t4.name, h2 = s2 > a2 ? s2 : a2, c2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            if (c2.setAttribute("x", String(o2)), c2.setAttribute("y", String(i2)), c2.setAttribute("height", String(a2)), c2.setAttribute("width", String(s2)), c2.setAttribute("clip-path", "url('#clip-path-" + u2 + "')"), e3) {
              var l2;
              if ("radial" === e3.type)
                (l2 = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", u2), l2.setAttribute("gradientUnits", "userSpaceOnUse"), l2.setAttribute("fx", String(o2 + s2 / 2)), l2.setAttribute("fy", String(i2 + a2 / 2)), l2.setAttribute("cx", String(o2 + s2 / 2)), l2.setAttribute("cy", String(i2 + a2 / 2)), l2.setAttribute("r", String(h2 / 2));
              else {
                var d2 = ((e3.rotation || 0) + n2) % (2 * Math.PI), f2 = (d2 + 2 * Math.PI) % (2 * Math.PI), g2 = o2 + s2 / 2, p2 = i2 + a2 / 2, v2 = o2 + s2 / 2, w2 = i2 + a2 / 2;
                f2 >= 0 && f2 <= 0.25 * Math.PI || f2 > 1.75 * Math.PI && f2 <= 2 * Math.PI ? (g2 -= s2 / 2, p2 -= a2 / 2 * Math.tan(d2), v2 += s2 / 2, w2 += a2 / 2 * Math.tan(d2)) : f2 > 0.25 * Math.PI && f2 <= 0.75 * Math.PI ? (p2 -= a2 / 2, g2 -= s2 / 2 / Math.tan(d2), w2 += a2 / 2, v2 += s2 / 2 / Math.tan(d2)) : f2 > 0.75 * Math.PI && f2 <= 1.25 * Math.PI ? (g2 += s2 / 2, p2 += a2 / 2 * Math.tan(d2), v2 -= s2 / 2, w2 -= a2 / 2 * Math.tan(d2)) : f2 > 1.25 * Math.PI && f2 <= 1.75 * Math.PI && (p2 += a2 / 2, g2 += s2 / 2 / Math.tan(d2), w2 -= a2 / 2, v2 -= s2 / 2 / Math.tan(d2)), (l2 = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", u2), l2.setAttribute("gradientUnits", "userSpaceOnUse"), l2.setAttribute("x1", String(Math.round(g2))), l2.setAttribute("y1", String(Math.round(p2))), l2.setAttribute("x2", String(Math.round(v2))), l2.setAttribute("y2", String(Math.round(w2)));
              }
              e3.colorStops.forEach(function(t5) {
                var e4 = t5.offset, r4 = t5.color, n3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                n3.setAttribute("offset", 100 * e4 + "%"), n3.setAttribute("stop-color", r4), l2.appendChild(n3);
              }), c2.setAttribute("fill", "url('#" + u2 + "')"), this._defs.appendChild(l2);
            } else
              r3 && c2.setAttribute("fill", r3);
            this._element.appendChild(c2);
          }, t3;
        }(), x = "canvas";
        for (var S = {}, M = 0; M <= 40; M++)
          S[M] = M;
        const C = { type: x, shape: "square", width: 300, height: 300, data: "", margin: 0, qrOptions: { typeNumber: S[0], mode: void 0, errorCorrectionLevel: "Q" }, imageOptions: { hideBackgroundDots: true, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: "square", color: "#000" }, backgroundOptions: { round: 0, color: "#fff" } };
        var A = function() {
          return (A = Object.assign || function(t3) {
            for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
              for (var o2 in e3 = arguments[r3])
                Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
            return t3;
          }).apply(this, arguments);
        };
        function k(t3) {
          var e3 = A({}, t3);
          if (!e3.colorStops || !e3.colorStops.length)
            throw "Field 'colorStops' is required in gradient";
          return e3.rotation ? e3.rotation = Number(e3.rotation) : e3.rotation = 0, e3.colorStops = e3.colorStops.map(function(t4) {
            return A(A({}, t4), { offset: Number(t4.offset) });
          }), e3;
        }
        function O(t3) {
          var e3 = A({}, t3);
          return e3.width = Number(e3.width), e3.height = Number(e3.height), e3.margin = Number(e3.margin), e3.imageOptions = A(A({}, e3.imageOptions), { hideBackgroundDots: Boolean(e3.imageOptions.hideBackgroundDots), imageSize: Number(e3.imageOptions.imageSize), margin: Number(e3.imageOptions.margin) }), e3.margin > Math.min(e3.width, e3.height) && (e3.margin = Math.min(e3.width, e3.height)), e3.dotsOptions = A({}, e3.dotsOptions), e3.dotsOptions.gradient && (e3.dotsOptions.gradient = k(e3.dotsOptions.gradient)), e3.cornersSquareOptions && (e3.cornersSquareOptions = A({}, e3.cornersSquareOptions), e3.cornersSquareOptions.gradient && (e3.cornersSquareOptions.gradient = k(e3.cornersSquareOptions.gradient))), e3.cornersDotOptions && (e3.cornersDotOptions = A({}, e3.cornersDotOptions), e3.cornersDotOptions.gradient && (e3.cornersDotOptions.gradient = k(e3.cornersDotOptions.gradient))), e3.backgroundOptions && (e3.backgroundOptions = A({}, e3.backgroundOptions), e3.backgroundOptions.gradient && (e3.backgroundOptions.gradient = k(e3.backgroundOptions.gradient))), e3;
        }
        var D = r2(192), P = r2.n(D), z = function(t3, e3, r3, n2) {
          return new (r3 || (r3 = Promise))(function(o2, i2) {
            function a2(t4) {
              try {
                u2(n2.next(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function s2(t4) {
              try {
                u2(n2.throw(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function u2(t4) {
              var e4;
              t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3(function(t5) {
                t5(e4);
              })).then(a2, s2);
            }
            u2((n2 = n2.apply(t3, e3 || [])).next());
          });
        }, B = function(t3, e3) {
          var r3, n2, o2, i2, a2 = { label: 0, sent: function() {
            if (1 & o2[0])
              throw o2[1];
            return o2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (r3)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (r3 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done)
                      return o2;
                    switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                      case 0:
                      case 1:
                        o2 = i4;
                        break;
                      case 4:
                        return a2.label++, { value: i4[1], done: false };
                      case 5:
                        a2.label++, n2 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          a2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                          a2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && a2.label < o2[1]) {
                          a2.label = o2[1], o2 = i4;
                          break;
                        }
                        if (o2 && a2.label < o2[2]) {
                          a2.label = o2[2], a2.ops.push(i4);
                          break;
                        }
                        o2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    i4 = e3.call(t3, a2);
                  } catch (t4) {
                    i4 = [6, t4], n2 = 0;
                  } finally {
                    r3 = o2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        };
        const q = function() {
          function t3(t4) {
            this._options = t4 ? O(a(C, t4)) : C, this.update();
          }
          return t3._clearContainer = function(t4) {
            t4 && (t4.innerHTML = "");
          }, t3.prototype._setupSvg = function() {
            var t4 = this;
            if (this._qr) {
              var e3 = new _(this._options);
              this._svg = e3.getElement(), this._svgDrawingPromise = e3.drawQR(this._qr).then(function() {
                var r3;
                t4._svg && (null === (r3 = t4._extension) || void 0 === r3 || r3.call(t4, e3.getElement(), t4._options));
              });
            }
          }, t3.prototype._setupCanvas = function() {
            var t4, e3 = this;
            this._qr && (this._canvas = document.createElement("canvas"), this._canvas.width = this._options.width, this._canvas.height = this._options.height, this._setupSvg(), this._canvasDrawingPromise = null === (t4 = this._svgDrawingPromise) || void 0 === t4 ? void 0 : t4.then(function() {
              if (e3._svg) {
                var t5 = e3._svg, r3 = new XMLSerializer().serializeToString(t5), n2 = "data:image/svg+xml;base64," + btoa(r3), o2 = new Image();
                return new Promise(function(t6) {
                  o2.onload = function() {
                    var r4, n3;
                    null === (n3 = null === (r4 = e3._canvas) || void 0 === r4 ? void 0 : r4.getContext("2d")) || void 0 === n3 || n3.drawImage(o2, 0, 0), t6();
                  }, o2.src = n2;
                });
              }
            }));
          }, t3.prototype._getElement = function(t4) {
            return void 0 === t4 && (t4 = "png"), z(this, void 0, void 0, function() {
              return B(this, function(e3) {
                switch (e3.label) {
                  case 0:
                    if (!this._qr)
                      throw "QR code is empty";
                    return "svg" !== t4.toLowerCase() ? [3, 2] : (this._svg && this._svgDrawingPromise || this._setupSvg(), [4, this._svgDrawingPromise]);
                  case 1:
                    return e3.sent(), [2, this._svg];
                  case 2:
                    return this._canvas && this._canvasDrawingPromise || this._setupCanvas(), [4, this._canvasDrawingPromise];
                  case 3:
                    return e3.sent(), [2, this._canvas];
                }
              });
            });
          }, t3.prototype.update = function(e3) {
            t3._clearContainer(this._container), this._options = e3 ? O(a(this._options, e3)) : this._options, this._options.data && (this._qr = P()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function(t4) {
              switch (true) {
                case /^[0-9]*$/.test(t4):
                  return "Numeric";
                case /^[0-9A-Z $%*+\-./:]*$/.test(t4):
                  return "Alphanumeric";
                default:
                  return "Byte";
              }
            }(this._options.data)), this._qr.make(), this._options.type === x ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
          }, t3.prototype.append = function(t4) {
            if (t4) {
              if ("function" != typeof t4.appendChild)
                throw "Container should be a single DOM node";
              this._options.type === x ? this._canvas && t4.appendChild(this._canvas) : this._svg && t4.appendChild(this._svg), this._container = t4;
            }
          }, t3.prototype.applyExtension = function(t4) {
            if (!t4)
              throw "Extension function should be defined.";
            this._extension = t4, this.update();
          }, t3.prototype.deleteExtension = function() {
            this._extension = void 0, this.update();
          }, t3.prototype.getRawData = function(t4) {
            return void 0 === t4 && (t4 = "png"), z(this, void 0, void 0, function() {
              var e3, r3, n2;
              return B(this, function(o2) {
                switch (o2.label) {
                  case 0:
                    if (!this._qr)
                      throw "QR code is empty";
                    return [4, this._getElement(t4)];
                  case 1:
                    return (e3 = o2.sent()) ? "svg" === t4.toLowerCase() ? (r3 = new XMLSerializer(), n2 = r3.serializeToString(e3), [2, new Blob(['<?xml version="1.0" standalone="no"?>\r\n' + n2], { type: "image/svg+xml" })]) : [2, new Promise(function(r4) {
                      return e3.toBlob(r4, "image/" + t4, 1);
                    })] : [2, null];
                }
              });
            });
          }, t3.prototype.download = function(t4) {
            return z(this, void 0, void 0, function() {
              var e3, r3, n2, o2, i2;
              return B(this, function(a2) {
                switch (a2.label) {
                  case 0:
                    if (!this._qr)
                      throw "QR code is empty";
                    return e3 = "png", r3 = "qr", "string" == typeof t4 ? (e3 = t4, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : "object" == typeof t4 && null !== t4 && (t4.name && (r3 = t4.name), t4.extension && (e3 = t4.extension)), [4, this._getElement(e3)];
                  case 1:
                    return (n2 = a2.sent()) ? ("svg" === e3.toLowerCase() ? (o2 = new XMLSerializer(), i2 = '<?xml version="1.0" standalone="no"?>\r\n' + (i2 = o2.serializeToString(n2)), s("data:image/svg+xml;charset=utf-8," + encodeURIComponent(i2), r3 + ".svg")) : s(n2.toDataURL("image/" + e3), r3 + "." + e3), [2]) : [2];
                }
              });
            });
          }, t3;
        }();
      } }, e = {};
      function r(n) {
        if (e[n])
          return e[n].exports;
        var o = e[n] = { exports: {} };
        return t[n](o, o.exports, r), o.exports;
      }
      return r.n = (t2) => {
        var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return r.d(e2, { a: e2 }), e2;
      }, r.d = (t2, e2) => {
        for (var n in e2)
          r.o(e2, n) && !r.o(t2, n) && Object.defineProperty(t2, n, { enumerable: true, get: e2[n] });
      }, r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r(676);
    })().default;
  });
})(qrCodeStyling);
const QRCodeStyling = /* @__PURE__ */ getDefaultExportFromCjs(qrCodeStylingExports);
const width = 260;
const height = 260;
const margin = 0;
const type = "svg";
const qrOptions = {};
const imageOptions = {
  hideBackgroundDots: true,
  imageSize: 0.2,
  margin: 5
};
const dotsOptions = {
  type: "rounded",
  color: "#000000"
};
const backgroundOptions = {
  color: "#ffffff"
};
const image = "";
const dotsOptionsHelper = {
  colorType: {
    single: true,
    gradient: false
  },
  gradient: {
    linear: true,
    radial: false,
    color1: "#6a1a4c",
    color2: "#6a1a4c",
    rotation: "0"
  }
};
const cornersSquareOptions = {
  type: "extra-rounded",
  color: "#000000"
};
const cornersSquareOptionsHelper = {
  colorType: {
    single: true,
    gradient: false
  },
  gradient: {
    linear: true,
    radial: false,
    color1: "#000000",
    color2: "#000000",
    rotation: "0"
  }
};
const cornersDotOptions = {
  type: "square",
  color: "#000000"
};
const cornersDotOptionsHelper = {
  colorType: {
    single: true,
    gradient: false
  },
  gradient: {
    linear: true,
    radial: false,
    color1: "#000000",
    color2: "#000000",
    rotation: "0"
  }
};
const backgroundOptionsHelper = {
  colorType: {
    single: true,
    gradient: false
  },
  gradient: {
    linear: true,
    radial: false,
    color1: "#ffffff",
    color2: "#ffffff",
    rotation: "0"
  }
};
const qr = {
  width,
  height,
  margin,
  type,
  qrOptions,
  imageOptions,
  dotsOptions,
  backgroundOptions,
  image,
  dotsOptionsHelper,
  cornersSquareOptions,
  cornersSquareOptionsHelper,
  cornersDotOptions,
  cornersDotOptionsHelper,
  backgroundOptionsHelper
};
const QROptions = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  backgroundOptions,
  backgroundOptionsHelper,
  cornersDotOptions,
  cornersDotOptionsHelper,
  cornersSquareOptions,
  cornersSquareOptionsHelper,
  default: qr,
  dotsOptions,
  dotsOptionsHelper,
  height,
  image,
  imageOptions,
  margin,
  qrOptions,
  type,
  width
}, Symbol.toStringTag, { value: "Module" }));
const BifrostLogo = "" + new URL("../../../assets/bifrost-903150fa.png", import.meta.url).href;
const TonkeeperLogo = "" + new URL("../../../assets/tonkeeper_logo-1118612a.png", import.meta.url).href;
function create_else_block(ctx) {
  let label;
  let t_value = shortAccountString(
    10,
    5,
    /*$address*/
    ctx[3] ?? ""
  ) + "";
  let t;
  return {
    c() {
      label = element("label");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      t = claim_text(label_nodes, t_value);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label, "for", "disconnect-modal-ton");
      attr(label, "class", "btn btn-sm btn-secondary");
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*$address*/
      8 && t_value !== (t_value = shortAccountString(
        10,
        5,
        /*$address*/
        ctx2[3] ?? ""
      ) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(label);
    }
  };
}
function create_if_block$1(ctx) {
  let label;
  let t;
  return {
    c() {
      label = element("label");
      t = text("Connect Wallet");
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      t = claim_text(label_nodes, "Connect Wallet");
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label, "for", "connect-modal-ton");
      attr(label, "class", "btn btn-sm btn-secondary");
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(label);
    }
  };
}
function create_fragment$1(ctx) {
  let div0;
  let t0;
  let input0;
  let t1;
  let div3;
  let div2;
  let h30;
  let t2;
  let t3;
  let label0;
  let t4;
  let t5;
  let div1;
  let button0;
  let img;
  let img_src_value;
  let t6;
  let t7;
  let input1;
  let t8;
  let div6;
  let div5;
  let h31;
  let t9;
  let t10;
  let label1;
  let t11;
  let t12;
  let div4;
  let button1;
  let t13;
  let t14;
  let input2;
  let t15;
  let label3;
  let label2;
  let h32;
  let t16;
  let t17;
  let p0;
  let t18;
  let t19;
  let div7;
  let t20;
  let p1;
  let t21;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (!/*$connected*/
    ctx2[2])
      return create_if_block$1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div0 = element("div");
      if_block.c();
      t0 = space();
      input0 = element("input");
      t1 = space();
      div3 = element("div");
      div2 = element("div");
      h30 = element("h3");
      t2 = text("Connect wallet");
      t3 = space();
      label0 = element("label");
      t4 = text("✕");
      t5 = space();
      div1 = element("div");
      button0 = element("button");
      img = element("img");
      t6 = text("\n				Tonkeeper");
      t7 = space();
      input1 = element("input");
      t8 = space();
      div6 = element("div");
      div5 = element("div");
      h31 = element("h3");
      t9 = text("You are going to disconnect");
      t10 = space();
      label1 = element("label");
      t11 = text("✕");
      t12 = space();
      div4 = element("div");
      button1 = element("button");
      t13 = text("Disconnect");
      t14 = space();
      input2 = element("input");
      t15 = space();
      label3 = element("label");
      label2 = element("label");
      h32 = element("h3");
      t16 = text("Connect TON");
      t17 = space();
      p0 = element("p");
      t18 = text("Scan the QR code with your phone's camera or Tonkeeper.");
      t19 = space();
      div7 = element("div");
      t20 = space();
      p1 = element("p");
      t21 = text("We do not store your wallet credentials, so your TON is safe.");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", {});
      var div0_nodes = children(div0);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(nodes);
      input0 = claim_element(nodes, "INPUT", { type: true, id: true, class: true });
      t1 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h30 = claim_element(div2_nodes, "H3", { class: true });
      var h30_nodes = children(h30);
      t2 = claim_text(h30_nodes, "Connect wallet");
      h30_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      label0 = claim_element(div2_nodes, "LABEL", { for: true, class: true });
      var label0_nodes = children(label0);
      t4 = claim_text(label0_nodes, "✕");
      label0_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button0 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      img = claim_element(button0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t6 = claim_text(button0_nodes, "\n				Tonkeeper");
      button0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t7 = claim_space(nodes);
      input1 = claim_element(nodes, "INPUT", { type: true, id: true, class: true });
      t8 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      h31 = claim_element(div5_nodes, "H3", { class: true });
      var h31_nodes = children(h31);
      t9 = claim_text(h31_nodes, "You are going to disconnect");
      h31_nodes.forEach(detach);
      t10 = claim_space(div5_nodes);
      label1 = claim_element(div5_nodes, "LABEL", { for: true, class: true });
      var label1_nodes = children(label1);
      t11 = claim_text(label1_nodes, "✕");
      label1_nodes.forEach(detach);
      t12 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      button1 = claim_element(div4_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t13 = claim_text(button1_nodes, "Disconnect");
      button1_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      t14 = claim_space(nodes);
      input2 = claim_element(nodes, "INPUT", { type: true, id: true, class: true });
      t15 = claim_space(nodes);
      label3 = claim_element(nodes, "LABEL", { for: true, class: true });
      var label3_nodes = children(label3);
      label2 = claim_element(label3_nodes, "LABEL", { class: true, for: true });
      var label2_nodes = children(label2);
      h32 = claim_element(label2_nodes, "H3", { class: true });
      var h32_nodes = children(h32);
      t16 = claim_text(h32_nodes, "Connect TON");
      h32_nodes.forEach(detach);
      t17 = claim_space(label2_nodes);
      p0 = claim_element(label2_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t18 = claim_text(p0_nodes, "Scan the QR code with your phone's camera or Tonkeeper.");
      p0_nodes.forEach(detach);
      t19 = claim_space(label2_nodes);
      div7 = claim_element(label2_nodes, "DIV", { id: true });
      children(div7).forEach(detach);
      t20 = claim_space(label2_nodes);
      p1 = claim_element(label2_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t21 = claim_text(p1_nodes, "We do not store your wallet credentials, so your TON is safe.");
      p1_nodes.forEach(detach);
      label2_nodes.forEach(detach);
      label3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input0, "type", "checkbox");
      attr(input0, "id", "connect-modal-ton");
      attr(input0, "class", "modal-toggle");
      attr(h30, "class", "font-bold text-lg");
      attr(label0, "for", "connect-modal-ton");
      attr(label0, "class", "btn btn-sm absolute right-2 top-2");
      attr(img, "class", "mr-2");
      if (!src_url_equal(img.src, img_src_value = TonkeeperLogo))
        attr(img, "src", img_src_value);
      attr(img, "alt", "tonkeeper");
      attr(img, "width", 35);
      attr(button0, "class", "btn btn-block");
      attr(div1, "class", "flex py-4 justify-center flex-col gap-2");
      attr(div2, "class", "modal-box");
      attr(div3, "class", "modal modal-bottom sm:modal-middle");
      attr(input1, "type", "checkbox");
      attr(input1, "id", "disconnect-modal-ton");
      attr(input1, "class", "modal-toggle");
      attr(h31, "class", "font-bold text-lg");
      attr(label1, "for", "disconnect-modal-ton");
      attr(label1, "class", "btn btn-sm absolute right-2 top-2");
      attr(button1, "class", "btn btn-sm");
      attr(div4, "class", "modal-action");
      attr(div5, "class", "modal-box");
      attr(div6, "class", "modal modal-bottom sm:modal-middle");
      attr(input2, "type", "checkbox");
      attr(input2, "id", "qr-modal");
      attr(input2, "class", "modal-toggle");
      attr(h32, "class", "text-lg font-bold");
      attr(p0, "class", "text-neutral text-sm w-56");
      attr(div7, "id", "qr-code");
      attr(p1, "class", "text-neutral text-sm w-56");
      attr(label2, "class", "modal-box relative w-fit text-center flex flex-col gap-2 items-center py-4 px-6");
      attr(label2, "for", "");
      attr(label3, "for", "qr-modal");
      attr(label3, "class", "modal cursor-pointer");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      if_block.m(div0, null);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, input0, anchor);
      input0.checked = /*isConnectingModalOpen*/
      ctx[0];
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, h30);
      append_hydration(h30, t2);
      append_hydration(div2, t3);
      append_hydration(div2, label0);
      append_hydration(label0, t4);
      append_hydration(div2, t5);
      append_hydration(div2, div1);
      append_hydration(div1, button0);
      append_hydration(button0, img);
      append_hydration(button0, t6);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, input1, anchor);
      input1.checked = /*isDisconnectingModalOpen*/
      ctx[1];
      insert_hydration(target, t8, anchor);
      insert_hydration(target, div6, anchor);
      append_hydration(div6, div5);
      append_hydration(div5, h31);
      append_hydration(h31, t9);
      append_hydration(div5, t10);
      append_hydration(div5, label1);
      append_hydration(label1, t11);
      append_hydration(div5, t12);
      append_hydration(div5, div4);
      append_hydration(div4, button1);
      append_hydration(button1, t13);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, input2, anchor);
      insert_hydration(target, t15, anchor);
      insert_hydration(target, label3, anchor);
      append_hydration(label3, label2);
      append_hydration(label2, h32);
      append_hydration(h32, t16);
      append_hydration(label2, t17);
      append_hydration(label2, p0);
      append_hydration(p0, t18);
      append_hydration(label2, t19);
      append_hydration(label2, div7);
      append_hydration(label2, t20);
      append_hydration(label2, p1);
      append_hydration(p1, t21);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "change",
            /*input0_change_handler*/
            ctx[8]
          ),
          listen(
            button0,
            "click",
            /*connect*/
            ctx[6]
          ),
          listen(
            input1,
            "change",
            /*input1_change_handler*/
            ctx[9]
          ),
          listen(
            button1,
            "click",
            /*disconnect*/
            ctx[7]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div0, null);
        }
      }
      if (dirty & /*isConnectingModalOpen*/
      1) {
        input0.checked = /*isConnectingModalOpen*/
        ctx2[0];
      }
      if (dirty & /*isDisconnectingModalOpen*/
      2) {
        input1.checked = /*isDisconnectingModalOpen*/
        ctx2[1];
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div0);
      if_block.d();
      if (detaching)
        detach(t0);
      if (detaching)
        detach(input0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div3);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(input1);
      if (detaching)
        detach(t8);
      if (detaching)
        detach(div6);
      if (detaching)
        detach(t14);
      if (detaching)
        detach(input2);
      if (detaching)
        detach(t15);
      if (detaching)
        detach(label3);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $TON;
  let $connected;
  let $address;
  component_subscribe($$self, TON, ($$value) => $$invalidate(10, $TON = $$value));
  const { connected, address, wallets } = $TON;
  component_subscribe($$self, connected, (value) => $$invalidate(2, $connected = value));
  component_subscribe($$self, address, (value) => $$invalidate(3, $address = value));
  const qrCode = new QRCodeStyling(QROptions);
  let isConnectingModalOpen = false;
  let isDisconnectingModalOpen = false;
  const connect = async () => {
    let connectionLink = await wallets.TonKeeper.connectExternal();
    qrCode.update({ data: connectionLink, image: BifrostLogo });
    qrCode.append(document.getElementById("qr-code"));
    document.getElementById("qr-modal").checked = true;
    $$invalidate(0, isConnectingModalOpen = false);
  };
  const disconnect = () => {
    TON.disconnect();
    $$invalidate(1, isDisconnectingModalOpen = false);
  };
  function input0_change_handler() {
    isConnectingModalOpen = this.checked;
    $$invalidate(0, isConnectingModalOpen);
  }
  function input1_change_handler() {
    isDisconnectingModalOpen = this.checked;
    $$invalidate(1, isDisconnectingModalOpen);
  }
  return [
    isConnectingModalOpen,
    isDisconnectingModalOpen,
    $connected,
    $address,
    connected,
    address,
    connect,
    disconnect,
    input0_change_handler,
    input1_change_handler
  ];
}
class ConnectWalletTON extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
function create_if_block_5(ctx) {
  let connectwalletton;
  let current;
  connectwalletton = new ConnectWalletTON({});
  return {
    c() {
      create_component(connectwalletton.$$.fragment);
    },
    l(nodes) {
      claim_component(connectwalletton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(connectwalletton, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(connectwalletton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(connectwalletton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(connectwalletton, detaching);
    }
  };
}
function create_if_block_4(ctx) {
  let connectwallettzs;
  let current;
  connectwallettzs = new ConnectWalletTZS({});
  return {
    c() {
      create_component(connectwallettzs.$$.fragment);
    },
    l(nodes) {
      claim_component(connectwallettzs.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(connectwallettzs, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(connectwallettzs.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(connectwallettzs.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(connectwallettzs, detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let connectwalleteth;
  let current;
  connectwalleteth = new ConnectWalletETH({});
  return {
    c() {
      create_component(connectwalleteth.$$.fragment);
    },
    l(nodes) {
      claim_component(connectwalleteth.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(connectwalleteth, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(connectwalleteth.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(connectwalleteth.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(connectwalleteth, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let connectwalletton;
  let current;
  connectwalletton = new ConnectWalletTON({});
  return {
    c() {
      create_component(connectwalletton.$$.fragment);
    },
    l(nodes) {
      claim_component(connectwalletton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(connectwalletton, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(connectwalletton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(connectwalletton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(connectwalletton, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let connectwallettzs;
  let current;
  connectwallettzs = new ConnectWalletTZS({});
  return {
    c() {
      create_component(connectwallettzs.$$.fragment);
    },
    l(nodes) {
      claim_component(connectwallettzs.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(connectwallettzs, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(connectwallettzs.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(connectwallettzs.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(connectwallettzs, detaching);
    }
  };
}
function create_if_block(ctx) {
  let connectwalleteth;
  let current;
  connectwalleteth = new ConnectWalletETH({});
  return {
    c() {
      create_component(connectwalleteth.$$.fragment);
    },
    l(nodes) {
      claim_component(connectwalleteth.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(connectwalleteth, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(connectwalleteth.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(connectwalleteth.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(connectwalleteth, detaching);
    }
  };
}
function create_fragment(ctx) {
  let header;
  let t0;
  let div14;
  let div13;
  let h4;
  let t1;
  let t2;
  let div3;
  let p0;
  let t3;
  let t4;
  let div1;
  let div0;
  let coinselect0;
  let t5;
  let current_block_type_index;
  let if_block0;
  let t6;
  let div2;
  let input0;
  let t7;
  let button0;
  let img0;
  let img0_src_value;
  let t8;
  let div7;
  let p1;
  let t9;
  let t10;
  let div5;
  let div4;
  let coinselect1;
  let t11;
  let current_block_type_index_1;
  let if_block1;
  let t12;
  let div6;
  let input1;
  let t13;
  let div10;
  let div8;
  let input2;
  let input2_value_value;
  let input2_class_value;
  let t14;
  let input3;
  let input3_value_value;
  let input3_class_value;
  let t15;
  let img1;
  let img1_src_value;
  let t16;
  let div9;
  let input4;
  let input4_value_value;
  let input4_class_value;
  let t17;
  let input5;
  let input5_value_value;
  let input5_class_value;
  let t18;
  let div12;
  let div11;
  let p2;
  let t19;
  let t20;
  let p3;
  let t21;
  let t22;
  let button1;
  let t23;
  let div13_intro;
  let div13_outro;
  let current;
  let mounted;
  let dispose;
  header = new Header({});
  coinselect0 = new CoinSelect({
    props: {
      selectedId: (
        /*fromNetwork*/
        ctx[3]
      ),
      excludedId: (
        /*toNetwork*/
        ctx[4]
      )
    }
  });
  const if_block_creators = [create_if_block_3, create_if_block_4, create_if_block_5];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (/*$fromNetwork*/
    ctx2[2] === 0)
      return 0;
    if (/*$fromNetwork*/
    ctx2[2] === 1)
      return 1;
    if (/*$fromNetwork*/
    ctx2[2] === 2)
      return 2;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  coinselect1 = new CoinSelect({
    props: {
      selectedId: (
        /*toNetwork*/
        ctx[4]
      ),
      excludedId: (
        /*fromNetwork*/
        ctx[3]
      )
    }
  });
  const if_block_creators_1 = [create_if_block, create_if_block_1, create_if_block_2];
  const if_blocks_1 = [];
  function select_block_type_1(ctx2, dirty) {
    if (/*$toNetwork*/
    ctx2[1] === 0)
      return 0;
    if (/*$toNetwork*/
    ctx2[1] === 1)
      return 1;
    if (/*$toNetwork*/
    ctx2[1] === 2)
      return 2;
    return -1;
  }
  if (~(current_block_type_index_1 = select_block_type_1(ctx))) {
    if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
  }
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      div14 = element("div");
      div13 = element("div");
      h4 = element("h4");
      t1 = text("Wrapped Swap");
      t2 = space();
      div3 = element("div");
      p0 = element("p");
      t3 = text("from");
      t4 = space();
      div1 = element("div");
      div0 = element("div");
      create_component(coinselect0.$$.fragment);
      t5 = space();
      if (if_block0)
        if_block0.c();
      t6 = space();
      div2 = element("div");
      input0 = element("input");
      t7 = space();
      button0 = element("button");
      img0 = element("img");
      t8 = space();
      div7 = element("div");
      p1 = element("p");
      t9 = text("to");
      t10 = space();
      div5 = element("div");
      div4 = element("div");
      create_component(coinselect1.$$.fragment);
      t11 = space();
      if (if_block1)
        if_block1.c();
      t12 = space();
      div6 = element("div");
      input1 = element("input");
      t13 = space();
      div10 = element("div");
      div8 = element("div");
      input2 = element("input");
      t14 = space();
      input3 = element("input");
      t15 = space();
      img1 = element("img");
      t16 = space();
      div9 = element("div");
      input4 = element("input");
      t17 = space();
      input5 = element("input");
      t18 = space();
      div12 = element("div");
      div11 = element("div");
      p2 = element("p");
      t19 = text("Swap fee");
      t20 = space();
      p3 = element("p");
      t21 = text(
        /*swapFee*/
        ctx[6]
      );
      t22 = space();
      button1 = element("button");
      t23 = text("swap");
      this.h();
    },
    l(nodes) {
      claim_component(header.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div14 = claim_element(nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      div13 = claim_element(div14_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      h4 = claim_element(div13_nodes, "H4", { class: true });
      var h4_nodes = children(h4);
      t1 = claim_text(h4_nodes, "Wrapped Swap");
      h4_nodes.forEach(detach);
      t2 = claim_space(div13_nodes);
      div3 = claim_element(div13_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      p0 = claim_element(div3_nodes, "P", {});
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "from");
      p0_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(coinselect0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      if (if_block0)
        if_block0.l(div1_nodes);
      div1_nodes.forEach(detach);
      t6 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      input0 = claim_element(div2_nodes, "INPUT", {
        type: true,
        placeholder: true,
        class: true,
        min: true,
        step: true
      });
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t7 = claim_space(div13_nodes);
      button0 = claim_element(div13_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      img0 = claim_element(button0_nodes, "IMG", { src: true, width: true, alt: true });
      button0_nodes.forEach(detach);
      t8 = claim_space(div13_nodes);
      div7 = claim_element(div13_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      p1 = claim_element(div7_nodes, "P", {});
      var p1_nodes = children(p1);
      t9 = claim_text(p1_nodes, "to");
      p1_nodes.forEach(detach);
      t10 = claim_space(div7_nodes);
      div5 = claim_element(div7_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      claim_component(coinselect1.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach);
      t11 = claim_space(div5_nodes);
      if (if_block1)
        if_block1.l(div5_nodes);
      div5_nodes.forEach(detach);
      t12 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      input1 = claim_element(div6_nodes, "INPUT", {
        type: true,
        placeholder: true,
        class: true,
        min: true,
        step: true
      });
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      t13 = claim_space(div13_nodes);
      div10 = claim_element(div13_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div8 = claim_element(div10_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      input2 = claim_element(div8_nodes, "INPUT", { type: true, name: true, class: true });
      t14 = claim_space(div8_nodes);
      input3 = claim_element(div8_nodes, "INPUT", { type: true, name: true, class: true });
      div8_nodes.forEach(detach);
      t15 = claim_space(div10_nodes);
      img1 = claim_element(div10_nodes, "IMG", { src: true, width: true, alt: true });
      t16 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      input4 = claim_element(div9_nodes, "INPUT", { type: true, name: true, class: true });
      t17 = claim_space(div9_nodes);
      input5 = claim_element(div9_nodes, "INPUT", { type: true, name: true, class: true });
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      t18 = claim_space(div13_nodes);
      div12 = claim_element(div13_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      div11 = claim_element(div12_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      p2 = claim_element(div11_nodes, "P", {});
      var p2_nodes = children(p2);
      t19 = claim_text(p2_nodes, "Swap fee");
      p2_nodes.forEach(detach);
      t20 = claim_space(div11_nodes);
      p3 = claim_element(div11_nodes, "P", {});
      var p3_nodes = children(p3);
      t21 = claim_text(
        p3_nodes,
        /*swapFee*/
        ctx[6]
      );
      p3_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      div12_nodes.forEach(detach);
      t22 = claim_space(div13_nodes);
      button1 = claim_element(div13_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t23 = claim_text(button1_nodes, "swap");
      button1_nodes.forEach(detach);
      div13_nodes.forEach(detach);
      div14_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h4, "class", "text-2xl mb-5");
      attr(div0, "class", "w-1/3");
      attr(div1, "class", "flex flex-row justify-between items-center my-3");
      attr(input0, "type", "number");
      attr(input0, "placeholder", "0.001");
      attr(input0, "class", "input input-bordered border-black w-full");
      attr(input0, "min", "0.000");
      attr(input0, "step", "0.001");
      attr(div2, "class", "flex flex-row justify-between gap-5 items-center");
      attr(div3, "class", "w-full");
      if (!src_url_equal(img0.src, img0_src_value = Arrows))
        attr(img0, "src", img0_src_value);
      attr(img0, "width", 30);
      attr(img0, "alt", "arrows");
      attr(button0, "class", "mt-6 mb-1");
      attr(div4, "class", "w-1/3");
      attr(div5, "class", "flex flex-row justify-between items-center my-3");
      attr(input1, "type", "number");
      attr(input1, "placeholder", "0.001");
      attr(input1, "class", "input input-bordered border-black w-full");
      attr(input1, "min", "0.000");
      attr(input1, "step", "0.001");
      attr(div6, "class", "flex flex-row justify-between gap-5 items-center");
      attr(div7, "class", "w-full");
      attr(input2, "type", "button");
      attr(input2, "name", "from-options");
      input2.value = input2_value_value = coins[
        /*$toNetwork*/
        ctx[1]
      ].wrappedSymbol;
      attr(input2, "class", input2_class_value = "btn btn-sm " + /*assetPair*/
      (ctx[0] === 0 ? "" : "btn-outline"));
      attr(input3, "type", "button");
      attr(input3, "name", "from-options");
      input3.value = input3_value_value = coins[
        /*$fromNetwork*/
        ctx[2]
      ].nativeSymbol;
      attr(input3, "class", input3_class_value = "btn btn-sm " + /*assetPair*/
      (ctx[0] === 1 ? "" : "btn-outline"));
      attr(div8, "class", "btn-group");
      if (!src_url_equal(img1.src, img1_src_value = ArrowRight))
        attr(img1, "src", img1_src_value);
      attr(img1, "width", 30);
      attr(img1, "alt", "arrows");
      attr(input4, "type", "button");
      attr(input4, "name", "to-options");
      input4.value = input4_value_value = coins[
        /*$toNetwork*/
        ctx[1]
      ].nativeSymbol;
      attr(input4, "class", input4_class_value = "btn btn-sm " + /*assetPair*/
      (ctx[0] === 0 ? "" : "btn-outline"));
      attr(input5, "type", "button");
      attr(input5, "name", "to-options");
      input5.value = input5_value_value = coins[
        /*$fromNetwork*/
        ctx[2]
      ].wrappedSymbol;
      attr(input5, "class", input5_class_value = "btn btn-sm " + /*assetPair*/
      (ctx[0] === 1 ? "" : "btn-outline"));
      attr(div9, "class", "btn-group");
      attr(div10, "class", "flex flex-row justify-between w-80 mt-5");
      attr(div11, "class", "flex flex-row justify-between");
      attr(div12, "class", "flex flex-col gap-2 w-full px-2 mt-5");
      attr(button1, "class", "btn btn-primary btn-full w-full mt-5");
      attr(div13, "class", "absolute bg-base-200 shadow-sm flex flex-col items-center py-4 px-5 w-full md:w-1/3 border-4 border-black");
      attr(div14, "class", "flex flex-col md:flex-row h-full justify-center items-center px-5 md:px-0");
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div14, anchor);
      append_hydration(div14, div13);
      append_hydration(div13, h4);
      append_hydration(h4, t1);
      append_hydration(div13, t2);
      append_hydration(div13, div3);
      append_hydration(div3, p0);
      append_hydration(p0, t3);
      append_hydration(div3, t4);
      append_hydration(div3, div1);
      append_hydration(div1, div0);
      mount_component(coinselect0, div0, null);
      append_hydration(div1, t5);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div1, null);
      }
      append_hydration(div3, t6);
      append_hydration(div3, div2);
      append_hydration(div2, input0);
      append_hydration(div13, t7);
      append_hydration(div13, button0);
      append_hydration(button0, img0);
      append_hydration(div13, t8);
      append_hydration(div13, div7);
      append_hydration(div7, p1);
      append_hydration(p1, t9);
      append_hydration(div7, t10);
      append_hydration(div7, div5);
      append_hydration(div5, div4);
      mount_component(coinselect1, div4, null);
      append_hydration(div5, t11);
      if (~current_block_type_index_1) {
        if_blocks_1[current_block_type_index_1].m(div5, null);
      }
      append_hydration(div7, t12);
      append_hydration(div7, div6);
      append_hydration(div6, input1);
      append_hydration(div13, t13);
      append_hydration(div13, div10);
      append_hydration(div10, div8);
      append_hydration(div8, input2);
      append_hydration(div8, t14);
      append_hydration(div8, input3);
      append_hydration(div10, t15);
      append_hydration(div10, img1);
      append_hydration(div10, t16);
      append_hydration(div10, div9);
      append_hydration(div9, input4);
      append_hydration(div9, t17);
      append_hydration(div9, input5);
      append_hydration(div13, t18);
      append_hydration(div13, div12);
      append_hydration(div12, div11);
      append_hydration(div11, p2);
      append_hydration(p2, t19);
      append_hydration(div11, t20);
      append_hydration(div11, p3);
      append_hydration(p3, t21);
      append_hydration(div13, t22);
      append_hydration(div13, button1);
      append_hydration(button1, t23);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*switchCoins*/
            ctx[5]
          ),
          listen(
            input2,
            "click",
            /*click_handler*/
            ctx[7]
          ),
          listen(
            input3,
            "click",
            /*click_handler_1*/
            ctx[8]
          ),
          listen(
            input4,
            "click",
            /*click_handler_2*/
            ctx[9]
          ),
          listen(
            input5,
            "click",
            /*click_handler_3*/
            ctx[10]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index !== previous_block_index) {
        if (if_block0) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block0 = if_blocks[current_block_type_index];
          if (!if_block0) {
            if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block0.c();
          }
          transition_in(if_block0, 1);
          if_block0.m(div1, null);
        } else {
          if_block0 = null;
        }
      }
      let previous_block_index_1 = current_block_type_index_1;
      current_block_type_index_1 = select_block_type_1(ctx2);
      if (current_block_type_index_1 !== previous_block_index_1) {
        if (if_block1) {
          group_outros();
          transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
            if_blocks_1[previous_block_index_1] = null;
          });
          check_outros();
        }
        if (~current_block_type_index_1) {
          if_block1 = if_blocks_1[current_block_type_index_1];
          if (!if_block1) {
            if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx2);
            if_block1.c();
          }
          transition_in(if_block1, 1);
          if_block1.m(div5, null);
        } else {
          if_block1 = null;
        }
      }
      if (!current || dirty & /*$toNetwork*/
      2 && input2_value_value !== (input2_value_value = coins[
        /*$toNetwork*/
        ctx2[1]
      ].wrappedSymbol)) {
        input2.value = input2_value_value;
      }
      if (!current || dirty & /*assetPair*/
      1 && input2_class_value !== (input2_class_value = "btn btn-sm " + /*assetPair*/
      (ctx2[0] === 0 ? "" : "btn-outline"))) {
        attr(input2, "class", input2_class_value);
      }
      if (!current || dirty & /*$fromNetwork*/
      4 && input3_value_value !== (input3_value_value = coins[
        /*$fromNetwork*/
        ctx2[2]
      ].nativeSymbol)) {
        input3.value = input3_value_value;
      }
      if (!current || dirty & /*assetPair*/
      1 && input3_class_value !== (input3_class_value = "btn btn-sm " + /*assetPair*/
      (ctx2[0] === 1 ? "" : "btn-outline"))) {
        attr(input3, "class", input3_class_value);
      }
      if (!current || dirty & /*$toNetwork*/
      2 && input4_value_value !== (input4_value_value = coins[
        /*$toNetwork*/
        ctx2[1]
      ].nativeSymbol)) {
        input4.value = input4_value_value;
      }
      if (!current || dirty & /*assetPair*/
      1 && input4_class_value !== (input4_class_value = "btn btn-sm " + /*assetPair*/
      (ctx2[0] === 0 ? "" : "btn-outline"))) {
        attr(input4, "class", input4_class_value);
      }
      if (!current || dirty & /*$fromNetwork*/
      4 && input5_value_value !== (input5_value_value = coins[
        /*$fromNetwork*/
        ctx2[2]
      ].wrappedSymbol)) {
        input5.value = input5_value_value;
      }
      if (!current || dirty & /*assetPair*/
      1 && input5_class_value !== (input5_class_value = "btn btn-sm " + /*assetPair*/
      (ctx2[0] === 1 ? "" : "btn-outline"))) {
        attr(input5, "class", input5_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(coinselect0.$$.fragment, local);
      transition_in(if_block0);
      transition_in(coinselect1.$$.fragment, local);
      transition_in(if_block1);
      add_render_callback(() => {
        if (div13_outro)
          div13_outro.end(1);
        div13_intro = create_in_transition(div13, receive, { key: "swap" });
        div13_intro.start();
      });
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(coinselect0.$$.fragment, local);
      transition_out(if_block0);
      transition_out(coinselect1.$$.fragment, local);
      transition_out(if_block1);
      if (div13_intro)
        div13_intro.invalidate();
      div13_outro = create_out_transition(div13, send, { key: "swap" });
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div14);
      destroy_component(coinselect0);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      destroy_component(coinselect1);
      if (~current_block_type_index_1) {
        if_blocks_1[current_block_type_index_1].d();
      }
      if (detaching && div13_outro)
        div13_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $toNetwork;
  let $fromNetwork;
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(12, $page = $$value));
  onMount(() => true);
  let fromSymbol = $page.url.searchParams.get("from");
  let toSymbol = $page.url.searchParams.get("to");
  let fromNetwork = writable(fromSymbol ? coins.findIndex((c) => c.nativeSymbol === fromSymbol) : 0);
  component_subscribe($$self, fromNetwork, (value) => $$invalidate(2, $fromNetwork = value));
  let toNetwork = writable(toSymbol ? coins.findIndex((c) => c.nativeSymbol === toSymbol) : 1);
  component_subscribe($$self, toNetwork, (value) => $$invalidate(1, $toNetwork = value));
  let assetPair = 0;
  const switchCoins = () => {
    const from = $fromNetwork;
    fromNetwork.set($toNetwork);
    toNetwork.set(from);
  };
  let swapFee = bigIntToFloat(0, 18, 18);
  const click_handler = () => $$invalidate(0, assetPair = 0);
  const click_handler_1 = () => $$invalidate(0, assetPair = 1);
  const click_handler_2 = () => $$invalidate(0, assetPair = 0);
  const click_handler_3 = () => $$invalidate(0, assetPair = 1);
  return [
    assetPair,
    $toNetwork,
    $fromNetwork,
    fromNetwork,
    toNetwork,
    switchCoins,
    swapFee,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};