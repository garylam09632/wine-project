import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import nene from '../images/nene-01.jpg';
import nene2 from '../images/nene-02.jpg';
import wine from '../images/wine.jpg';
import Contact from '../components/Contact';
import { News as NewsSection, SingleNews } from '../components/News';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [
                {
                    id: "1",
                    title: "SOME TITLE",
                    date: "12 DEC 2021",
                    image: wine,
                    shoppingLink: "https://www.google.com/",
                    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\b\n" + "Donec in pharetra nisi. Morbi pretium dolor ac metus mollis venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tristique feugiat tellus nec aliquam. Nunc dictum ligula ac neque tincidunt, a auctor libero molestie. Donec rhoncus libero vitae quam euismod tincidunt. Nulla vehicula mi turpis, vel posuere erat efficitur sed.\n" +
                    "Ut fringilla neque lacus, in laoreet turpis dignissim ut. Vivamus eget tincidunt felis. Duis accumsan, risus vel tincidunt auctor, elit augue scelerisque nisi, et ornare quam tortor a enim. Morbi vestibulum rutrum libero. Nulla venenatis est at nunc aliquet, id tristique ex consequat. Donec molestie leo eu lorem ultricies, non congue diam ultricies. Donec sodales sit amet eros at vestibulum. Fusce eu bibendum diam, ornare dapibus nunc. Nullam non lacus tristique, tristique tortor ac, congue nisl. Fusce maximus aliquet aliquet. Morbi luctus, tellus tincidunt porttitor sagittis, felis risus aliquet ligula, ut pharetra risus ipsum in turpis. Aliquam iaculis, metus id scelerisque ornare, nisi sem volutpat lectus, in pretium orci enim a enim. Sed fermentum, nulla sit amet porta porta, dolor felis efficitur magna, vel mattis massa turpis eget ligula. Cras ac aliquam ipsum. Cras ligula leo, porttitor id sem sed, semper aliquam turpis. Aenean condimentum augue eget lacus consectetur scelerisque.\n" +    
                    "Nulla mattis aliquet nibh, ut sollicitudin tellus cursus eget. Nulla consequat sodales ligula, eget vehicula metus viverra vel. Phasellus semper volutpat nunc eget mattis. Ut id eleifend erat. Vestibulum eu massa erat. Vivamus bibendum dapibus quam, a vestibulum ipsum porttitor id. Proin mauris orci, auctor id porttitor ut, vulputate non ipsum. Vivamus blandit quam mauris, vitae imperdiet turpis vestibulum a. Nam vel est at ipsum malesuada tincidunt vitae in ipsum. Nulla viverra sem in nisl eleifend ultrices. Nulla egestas interdum nibh nec vestibulum. Fusce massa leo, luctus non mollis quis, rhoncus nec risus. Maecenas quis neque lorem. Praesent venenatis aliquet libero et hendrerit.\n"+                    
                    "Vestibulum et dolor pulvinar, sagittis lectus vitae, tempus dui. Praesent gravida erat vitae sapien ornare ullamcorper sed nec odio. Etiam ac tortor porta, semper mauris eu, porttitor diam. Ut ut laoreet tortor, eget laoreet ipsum. Mauris quis turpis non ex dapibus dapibus nec ac quam. Nam pellentesque nisi non laoreet imperdiet. Aenean quis tortor ac felis rutrum sagittis ut nec mi. Phasellus nec lacinia ligula, eleifend tempor tellus. Praesent sed mauris ac sapien dignissim aliquam in ut felis. Nunc luctus tellus at est faucibus luctus.\n" +                    
                    "Suspendisse gravida, risus in egestas tincidunt, sem magna egestas quam, et congue dolor libero quis risus. Aliquam vehicula risus eu lacus porttitor accumsan. Pellentesque nec nisi mi. Cras molestie ornare dui, a congue metus posuere sit amet. Mauris a mollis ipsum, sed hendrerit eros. Vestibulum iaculis, sem eu luctus pulvinar, mi arcu venenatis nisl, nec ultricies nisi odio sit amet sapien. Fusce ut urna sed nunc efficitur ullamcorper.\n" +
                    "Quisque nec ex neque. Cras ultrices lorem id condimentum blandit. Donec commodo laoreet lacus, eget rutrum elit. Curabitur nec lorem quis urna lacinia finibus quis id diam. Pellentesque enim odio, dictum eu lorem in, vulputate imperdiet libero. Morbi dictum gravida fermentum. Praesent blandit sit amet sem et eleifend. Ut eu leo placerat, consequat erat sit amet, pretium mauris. Nullam porttitor facilisis mi, tincidunt posuere risus tristique non. Pellentesque consectetur velit massa, quis auctor erat convallis nec. Sed vitae purus diam.",
                    shortDescription: "Mauris eros orci, blandit a porta eu, sagittis ac nulla. Vivamus aliquet urna ac erat aliquam, nec finibus felis viverra. Phasellus euismod dui in sapien mollis, quis laoreet enim tempor."
                },
                {
                    id: "2",
                    title: "Mauris eros orci, blandit a porta eu, sagittis ac nulla",
                    date: "23 JAN 2022",
                    image: nene,
                    shoppingLink: "https://www.google.com/",
                    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\b\n" + "Donec in pharetra nisi. Morbi pretium dolor ac metus mollis venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tristique feugiat tellus nec aliquam. Nunc dictum ligula ac neque tincidunt, a auctor libero molestie. Donec rhoncus libero vitae quam euismod tincidunt. Nulla vehicula mi turpis, vel posuere erat efficitur sed.\n" +
                    "Ut fringilla neque lacus, in laoreet turpis dignissim ut. Vivamus eget tincidunt felis. Duis accumsan, risus vel tincidunt auctor, elit augue scelerisque nisi, et ornare quam tortor a enim. Morbi vestibulum rutrum libero. Nulla venenatis est at nunc aliquet, id tristique ex consequat. Donec molestie leo eu lorem ultricies, non congue diam ultricies. Donec sodales sit amet eros at vestibulum. Fusce eu bibendum diam, ornare dapibus nunc. Nullam non lacus tristique, tristique tortor ac, congue nisl. Fusce maximus aliquet aliquet. Morbi luctus, tellus tincidunt porttitor sagittis, felis risus aliquet ligula, ut pharetra risus ipsum in turpis. Aliquam iaculis, metus id scelerisque ornare, nisi sem volutpat lectus, in pretium orci enim a enim. Sed fermentum, nulla sit amet porta porta, dolor felis efficitur magna, vel mattis massa turpis eget ligula. Cras ac aliquam ipsum. Cras ligula leo, porttitor id sem sed, semper aliquam turpis. Aenean condimentum augue eget lacus consectetur scelerisque.\n" +    
                    "Nulla mattis aliquet nibh, ut sollicitudin tellus cursus eget. Nulla consequat sodales ligula, eget vehicula metus viverra vel. Phasellus semper volutpat nunc eget mattis. Ut id eleifend erat. Vestibulum eu massa erat. Vivamus bibendum dapibus quam, a vestibulum ipsum porttitor id. Proin mauris orci, auctor id porttitor ut, vulputate non ipsum. Vivamus blandit quam mauris, vitae imperdiet turpis vestibulum a. Nam vel est at ipsum malesuada tincidunt vitae in ipsum. Nulla viverra sem in nisl eleifend ultrices. Nulla egestas interdum nibh nec vestibulum. Fusce massa leo, luctus non mollis quis, rhoncus nec risus. Maecenas quis neque lorem. Praesent venenatis aliquet libero et hendrerit.\n"+                    
                    "Vestibulum et dolor pulvinar, sagittis lectus vitae, tempus dui. Praesent gravida erat vitae sapien ornare ullamcorper sed nec odio. Etiam ac tortor porta, semper mauris eu, porttitor diam. Ut ut laoreet tortor, eget laoreet ipsum. Mauris quis turpis non ex dapibus dapibus nec ac quam. Nam pellentesque nisi non laoreet imperdiet. Aenean quis tortor ac felis rutrum sagittis ut nec mi. Phasellus nec lacinia ligula, eleifend tempor tellus. Praesent sed mauris ac sapien dignissim aliquam in ut felis. Nunc luctus tellus at est faucibus luctus.\n" +                    
                    "Suspendisse gravida, risus in egestas tincidunt, sem magna egestas quam, et congue dolor libero quis risus. Aliquam vehicula risus eu lacus porttitor accumsan. Pellentesque nec nisi mi. Cras molestie ornare dui, a congue metus posuere sit amet. Mauris a mollis ipsum, sed hendrerit eros. Vestibulum iaculis, sem eu luctus pulvinar, mi arcu venenatis nisl, nec ultricies nisi odio sit amet sapien. Fusce ut urna sed nunc efficitur ullamcorper.\n" +
                    "Quisque nec ex neque. Cras ultrices lorem id condimentum blandit. Donec commodo laoreet lacus, eget rutrum elit. Curabitur nec lorem quis urna lacinia finibus quis id diam. Pellentesque enim odio, dictum eu lorem in, vulputate imperdiet libero. Morbi dictum gravida fermentum. Praesent blandit sit amet sem et eleifend. Ut eu leo placerat, consequat erat sit amet, pretium mauris. Nullam porttitor facilisis mi, tincidunt posuere risus tristique non. Pellentesque consectetur velit massa, quis auctor erat convallis nec. Sed vitae purus diam.",
                    shortDescription: "Mauris eros orci, blandit a porta eu, sagittis ac nulla. Vivamus aliquet urna ac erat aliquam, nec finibus felis viverra. Phasellus euismod dui in sapien mollis, quis laoreet enim tempor."
                },
                {
                    id: "3",
                    title: "SOME TITLE 3",
                    date: "01 FEB 2022",
                    image: nene2,
                    shoppingLink: "https://www.google.com/",
                    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\b\n" + "Donec in pharetra nisi. Morbi pretium dolor ac metus mollis venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tristique feugiat tellus nec aliquam. Nunc dictum ligula ac neque tincidunt, a auctor libero molestie. Donec rhoncus libero vitae quam euismod tincidunt. Nulla vehicula mi turpis, vel posuere erat efficitur sed.\n" +
                    "Ut fringilla neque lacus, in laoreet turpis dignissim ut. Vivamus eget tincidunt felis. Duis accumsan, risus vel tincidunt auctor, elit augue scelerisque nisi, et ornare quam tortor a enim. Morbi vestibulum rutrum libero. Nulla venenatis est at nunc aliquet, id tristique ex consequat. Donec molestie leo eu lorem ultricies, non congue diam ultricies. Donec sodales sit amet eros at vestibulum. Fusce eu bibendum diam, ornare dapibus nunc. Nullam non lacus tristique, tristique tortor ac, congue nisl. .\n" +    
                    "Nulla mattis aliquet nibh, ut sollicitudin tellus cursus eget. Nulla consequat sodales ligula, eget vehicula metus viverra vel. Phasellus semper volutpat nunc eget mattis. Ut id eleifend erat. Vestibulum eu massa erat. Vivamus bibendum dapibus quam, a vestibulum ipsum porttitor id. Proin mauris orci, auctor id porttitor ut, vulputate non ipsum. Vivamus blandit quam mauris, vitae imperdiet turpis vestibulum a. Nam vel est at ipsum malesuada tincidunt vitae in ipsum. Nulla viverra sem in nisl eleifend ultrices. Nulla egestas interdum nibh nec vestibulum.\n"+                    
                    "Vestibulum et dolor pulvinar, sagittis lectus vitae, tempus dui. Praesent gravida erat vitae sapien ornare ullamcorper sed nec odio. Etiam ac tortor porta, semper mauris eu, porttitor diam. Ut ut laoreet tortor, eget laoreet ipsum. Mauris quis turpis non ex dapibus dapibus nec ac quam. Nam pellentesque nisi non laoreet imperdiet. Aenean quis tortor ac felis rutrum sagittis ut nec mi. Phasellus nec lacinia ligula, eleifend tempor tellus. Praesent sed mauris ac sapien dignissim aliquam in ut felis. Nunc luctus tellus at est faucibus luctus.\n" +                    
                    "Suspendisse gravida, risus in egestas tincidunt, sem magna egestas quam, et congue dolor libero quis risus. Aliquam vehicula risus eu lacus porttitor accumsan. Pellentesque nec nisi mi. Cras molestie ornare dui, a congue metus posuere sit amet. Mauris a mollis ipsum, sed hendrerit eros. Vestibulum iaculis, sem eu luctus pulvinar, mi arcu venenatis nisl, nec ultricies nisi odio sit amet sapien. Fusce ut urna sed nunc efficitur ullamcorper.\n" +
                    "Quisque nec ex neque. Cras ultrices lorem id condimentum blandit. Donec commodo laoreet lacus, eget rutrum elit. Curabitur nec lorem quis urna lacinia finibus quis id diam. Pellentesque enim odio, dictum eu lorem in, vulputate imperdiet libero. Morbi dictum gravida fermentum. Praesent blandit sit amet sem et eleifend. Ut eu leo placerat, consequat erat sit amet, pretium mauris. Nullam porttitor facilisis mi, tincidunt posuere risus tristique non. Pellentesque consectetur velit massa, quis auctor erat convallis nec. Sed vitae purus diam.",
                    shortDescription: "Mauris eros orci, blandit a porta eu, sagittis ac nulla. Vivamus aliquet urna ac erat aliquam, nec finibus felis viverra. Phasellus euismod dui in sapien mollis, quis laoreet enim tempor."
                }
            ]
        }
    }

    fetchData = () => {
        // Should be calling api and then set the state
       
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fadeInFunction();
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/news">
                        <NewsSection news={ this.state.news } />
                    </Route>
                    <Route path="/news/:name">
                        <SingleNews news={ this.state.news } />
                    </Route>
                </Switch>

                <Contact />
            </>
        )
    }
}

export default News;
