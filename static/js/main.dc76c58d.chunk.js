(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={Overlay:"Modal_Overlay__oXRye",Modal:"Modal_Modal__2pOcH"}},22:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__2Tnrw"}},25:function(e,a,t){e.exports={App:"styles_App__3-zv5"}},27:function(e,a,t){e.exports=t(71)},7:function(e,a,t){e.exports={Searchbar:"SearchForm_Searchbar__tZskI",SearchForm:"SearchForm_SearchForm__2rnXS",SearchForm_button:"SearchForm_SearchForm_button__U0t63",SearchForm_buttonLabel:"SearchForm_SearchForm_buttonLabel__3N3lE",SearchForm_input:"SearchForm_SearchForm_input__3zb00"}},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),l=t.n(o),c=t(11),i=t(3),u=t(4),m=t(6),s=t(5),p=t(8),h=t.n(p),g=function(e){var a=e.onClick;return r.a.createElement("div",{className:h.a.Btn},r.a.createElement("button",{className:h.a.Button,type:"button",onClick:a},"Load more"))},d=t(9),y=t.n(d),f=function(e){var a=e.webformatURL,t=e.largeImageURL,n=e.tags,o=e.onOpen;return r.a.createElement("li",{className:y.a.ImageGalleryItem},r.a.createElement("img",{src:a,alt:n,onClick:function(){return o(t)},className:y.a.ImageGalleryItem_image}))},_=t(22),b=t.n(_),v=function(e){var a=e.gallery,t=e.onOpen;return r.a.createElement("ul",{className:b.a.ImageGallery},a.map((function(e){var a=e.id,n=e.webformatURL,o=e.largeImageURL,l=e.tags;return r.a.createElement(f,{key:a,webformatURL:n,largeImageURL:o,tags:l,onOpen:t})})))},S=(t(32),t(23)),E=t.n(S),I=function(){return r.a.createElement("div",null,r.a.createElement(E.a,{type:"Puff",color:"#00BFFF",height:100,width:100}))},O=t(10),w=t.n(O),k=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleKeyDown=function(a){"Escape"===a.code&&e.props.onClose()},e.closeModalByClick=function(a){a.target===a.currentTarget&&e.props.onClose()},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.imgUrl;return r.a.createElement("div",{onClick:this.closeModalByClick,className:w.a.Overlay},r.a.createElement("div",{className:w.a.Modal},e&&r.a.createElement("img",{src:e,alt:"img"})))}}]),t}(n.Component),L=t(26),F=t(7),C=t.n(F),M=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={inputValue:" "},e.handleOnChange=function(a){var t=a.target.value;e.setState({inputValue:t})},e.handleOnSubmit=function(a){a.preventDefault();var t=e.props.onSubmit,n=e.state.inputValue;t(n),e.setState(Object(L.a)({},n))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state.inputValue;return r.a.createElement("header",{className:C.a.Searchbar},r.a.createElement("form",{className:C.a.SearchForm,onSubmit:this.handleOnSubmit},r.a.createElement("button",{type:"submit",className:C.a.SearchForm_button},r.a.createElement("span",{className:C.a.SearchForm_buttonLabel},"Search")),r.a.createElement("input",{onChange:this.handleOnChange,value:e,className:C.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))}}]),t}(n.Component),j=t(24),N=t.n(j),U=function(e){var a=e.query,t=e.page;return N.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(t,"&key=").concat("14760825-e730b99d3ea41b1e2e75ad068","&image_type=photo&orientation=horizontal&per_page=12"))},B=t(25),G=t.n(B),q=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={gallery:[],page:0,query:"",isLoading:!1,isModal:!1,imgUrl:""},e.getDataByParams=function(a){var t=a.query,n=a.page,r=e.state.gallery;return e.setState({isLoading:!0}),U({page:n,query:t}).then((function(a){var t=a.data;return e.setState({gallery:[].concat(Object(c.a)(r),Object(c.a)(t.hits))})})).catch((function(a){e.setState({error:a}),console.log(a)})).finally((function(){e.setState({isLoading:!1})}))},e.handleSearch=function(a){e.setState({gallery:[],query:a,page:1})},e.handleLoadMore=function(){var a=e.state.page;e.setState({page:a+1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.openLargeImage=function(a){e.setState({imgUrl:a}),e.closeModal()},e.closeModal=function(){e.setState((function(e){return{isModal:!e.isModal}}))},e}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this.state,n=t.page,r=t.query;a.page===n&&a.query===r||this.getDataByParams({query:r,page:n})}},{key:"render",value:function(){var e=this.state,a=e.gallery,t=e.isModal,n=e.isLoading,o=e.imgUrl;return r.a.createElement("div",{className:G.a.App},r.a.createElement(M,{onSubmit:this.handleSearch}),a.length>0&&r.a.createElement(v,{gallery:a,onOpen:this.openLargeImage}),n&&r.a.createElement(I,null),a.length>0&&r.a.createElement(g,{onClick:this.handleLoadMore}),t&&r.a.createElement(k,{onClose:this.closeModal,imgUrl:o}))}}]),t}(n.Component);l.a.render(r.a.createElement(q,null),document.querySelector("#root"))},8:function(e,a,t){e.exports={Btn:"Button_Btn__1I5kp",Button:"Button_Button__dqcVa"}},9:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__QEikL",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__Lc8AJ"}}},[[27,1,2]]]);
//# sourceMappingURL=main.dc76c58d.chunk.js.map