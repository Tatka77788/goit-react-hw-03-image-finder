(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={Overlay:"Modal_Overlay__oXRye",Modal:"Modal_Modal__2pOcH"}},22:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__2Tnrw"}},25:function(e,a,t){e.exports={App:"styles_App__3-zv5"}},26:function(e,a,t){e.exports={error:"ErrorNotification_error__2i0rt"}},28:function(e,a,t){e.exports=t(72)},7:function(e,a,t){e.exports={Searchbar:"SearchForm_Searchbar__tZskI",SearchForm:"SearchForm_SearchForm__2rnXS",SearchForm_button:"SearchForm_SearchForm_button__U0t63",SearchForm_buttonLabel:"SearchForm_SearchForm_buttonLabel__3N3lE",SearchForm_input:"SearchForm_SearchForm_input__3zb00"}},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),l=t.n(o),c=t(11),i=t(3),u=t(4),s=t(6),m=t(5),p=t(8),g=t.n(p),h=function(e){var a=e.onClick;return r.a.createElement("div",{className:g.a.Btn},r.a.createElement("button",{className:g.a.Button,type:"button",onClick:a},"Load more"))},d=t(9),y=t.n(d),f=function(e){var a=e.webformatURL,t=e.largeImageURL,n=e.tags,o=e.onOpen;return r.a.createElement("li",{className:y.a.ImageGalleryItem},r.a.createElement("img",{src:a,alt:n,onClick:function(){return o(t)},className:y.a.ImageGalleryItem_image}))},_=t(22),b=t.n(_),v=function(e){var a=e.gallery,t=e.onOpen;return r.a.createElement("ul",{className:b.a.ImageGallery},a.map((function(e){return r.a.createElement(f,{key:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,onOpen:t})})))},S=(t(33),t(23)),E=t.n(S),O=function(){return r.a.createElement("div",null,r.a.createElement(E.a,{type:"Puff",color:"#00BFFF",height:100,width:100}))},I=t(10),w=t.n(I),k=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleKeyDown=function(a){"Escape"===a.code&&e.props.onClose()},e.closeModalByClick=function(a){a.target===a.currentTarget&&e.props.onClose()},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.imgUrl;return r.a.createElement("div",{onClick:this.closeModalByClick,className:w.a.Overlay},r.a.createElement("div",{className:w.a.Modal},e&&r.a.createElement("img",{src:e,alt:"img"})))}}]),t}(n.Component),L=t(27),F=t(7),N=t.n(F),M=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={inputValue:" "},e.handleOnChange=function(a){var t=a.target.value;e.setState({inputValue:t})},e.handleOnSubmit=function(a){a.preventDefault();var t=e.props.onSubmit,n=e.state.inputValue;t(n),e.setState(Object(L.a)({},n))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state.inputValue;return r.a.createElement("header",{className:N.a.Searchbar},r.a.createElement("form",{className:N.a.SearchForm,onSubmit:this.handleOnSubmit},r.a.createElement("button",{type:"submit",className:N.a.SearchForm_button},r.a.createElement("span",{className:N.a.SearchForm_buttonLabel},"Search")),r.a.createElement("input",{onChange:this.handleOnChange,value:e,className:N.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))}}]),t}(n.Component),C=t(24),j=t.n(C),G=function(e){var a=e.query,t=e.page;return j.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(t,"&key=").concat("14760825-e730b99d3ea41b1e2e75ad068","&image_type=photo&orientation=horizontal&per_page=12"))},U=t(25),B=t.n(U),x=t(26),q=t.n(x),D=function(e){var a=e.text;return r.a.createElement("h1",{className:q.a.erro},"WHOOPS, SOMETHING WENT WRONG! ",r.a.createElement("br",null),a)},R=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={gallery:[],page:0,query:"",isLoading:!1,isModal:!1,imgUrl:"",error:null},e.getDataByParams=function(a){var t=a.query,n=a.page,r=e.state.gallery;return e.setState({isLoading:!0}),G({page:n,query:t}).then((function(a){var t=a.data;return e.setState({gallery:[].concat(Object(c.a)(r),Object(c.a)(t.hits))})})).catch((function(a){e.setState({error:a})})).finally((function(){e.setState({isLoading:!1}),e.scrolling()}))},e.handleSearch=function(a){e.setState({gallery:[],query:a,page:1})},e.handleLoadMore=function(){var a=e.state.page;e.setState({page:a+1})},e.scrolling=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.openLargeImage=function(a){e.setState({imgUrl:a}),e.closeModal()},e.closeModal=function(){e.setState((function(e){return{isModal:!e.isModal}}))},e}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this.state,n=t.page,r=t.query;a.page===n&&a.query===r||this.getDataByParams({query:r,page:n})}},{key:"render",value:function(){var e=this.state,a=e.gallery,t=e.error,n=e.isModal,o=e.isLoading,l=e.imgUrl;return r.a.createElement("div",{className:B.a.App},r.a.createElement(M,{onSubmit:this.handleSearch}),t&&r.a.createElement(D,{text:t.message}),a.length>0&&r.a.createElement(v,{gallery:a,onOpen:this.openLargeImage}),o&&r.a.createElement(O,null),a.length>0&&r.a.createElement(h,{onClick:this.handleLoadMore}),n&&r.a.createElement(k,{onClose:this.closeModal,imgUrl:l}))}}]),t}(n.Component);l.a.render(r.a.createElement(R,null),document.querySelector("#root"))},8:function(e,a,t){e.exports={Btn:"Button_Btn__1I5kp",Button:"Button_Button__dqcVa"}},9:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__QEikL",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__Lc8AJ"}}},[[28,1,2]]]);
//# sourceMappingURL=main.5b363528.chunk.js.map