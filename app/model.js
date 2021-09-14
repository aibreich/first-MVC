var MODEL = (function() {

    var _myVar = "Model";
    var _homePageInfo = `<section class="home">
    <h1>welcome home!</h1>
    <p class="home-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora illum quis earum, exercitationem ullam odit non dicta consequatur accusantium? Ratione maxime, consectetur iusto aspernatur rerum cupiditate temporibus quas a fuga! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores atque, unde optio perferendis deleniti maxime rem consequuntur earum necessitatibus quo ipsum consequatur cupiditate illum rerum voluptates fugit hic fuga! Quasi.</p>
    <div class="home-img"></div>
</section>
<section class="home-2">
    <h1>Now that you are here</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta explicabo repudiandae esse blanditiis inventore ipsa voluptatum, minima voluptas facere nulla minus eaque perferendis repellendus excepturi omnis dolore cupiditate enim.
    Impedit voluptate est voluptatibus cupiditate laboriosam dolore nisi aperiam sint maxime qui, accusantium ullam aliquid illum eius nulla numquam odit eos, libero accusamus ipsam ea alias blanditiis in delectus? Eos.
    Quas similique voluptates ipsum. Porro deleniti eligendi libero repellat ipsum harum beatae officia similique, itaque dolore dolores nulla, quidem inventore architecto tenetur corporis modi non quia necessitatibus ad quis. Tempore.
    Beatae, voluptatem culpa. Sunt, ipsam perferendis iure quos doloribus eaque cumque praesentium accusantium hic nobis. Dolorem modi cupiditate consequatur nemo esse, dolorum perferendis ipsa laboriosam nesciunt corrupti optio error doloremque!
    Accusantium quod impedit voluptatem tempore earum cum sint? Esse, expedita unde, ab ducimus voluptates quisquam voluptate, non corrupti natus quidem temporibus suscipit ad similique numquam assumenda exercitationem. Nesciunt, ut dolorum.</p>
</section>`;
    var _aboutPageInfo = ` <section class="about">
    <h1>oh? You want to know more.</h1>
    <div class="about-img-1"></div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem reiciendis laborum alias nostrum ex non eius praesentium similique earum error totam eaque dignissimos ea quam harum, saepe neque! Ratione, mollitia!
    Porro cupiditate veniam quisquam! Quaerat sint consequuntur rem, rerum velit aut commodi error illo, iusto odit corrupti nemo suscipit quia quas iste similique ratione molestias sunt. Consectetur quidem soluta laborum.
    Quidem quasi iste, ab similique aliquid dignissimos voluptatum aperiam aliquam, quas architecto minus? Iure est nulla perferendis alias, obcaecati architecto at delectus eveniet aliquid eius et cumque facilis aspernatur autem!</p>
</section>
<section class="about-2">
    <h1>Youre still reading?</h1>
    <div class="about-img-2"></div>
    <div class="about-img-3"></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquam distinctio voluptatum sequi quasi numquam fugit quisquam delectus magnam, sint ipsa saepe cupiditate blanditiis dolorem quibusdam ea doloribus sed dicta?
    Similique, laudantium. Nihil, id error. Inventore magni ducimus reprehenderit odio, earum corporis repudiandae placeat voluptas eum laudantium in velit eveniet excepturi atque harum voluptates officiis quae repellat tempora. Animi, quas!
    Odit quis molestiae expedita, voluptates natus laboriosam iure id nemo possimus officiis. Iste dolor asperiores esse amet, ad officiis excepturi fugit veniam porro modi totam laboriosam soluta vel, quod illum.</p>
    
</section>`;
var _helpPageInfo = `<section class="help">
    <h1>welcome! how can we help?</h1>
        <form class="margin">
            <input class="inp-box" type="text">
        </form>
</section>
<section class="help-2">
    <h1>frequent searches</h1>
    <div class="fq-boxholder">
        <a href="#" class="box box--img-1">
            <div class="box-text">EVENT #1</div>
        </a>
        <a href="#" class="box box--img-2">
            <div class="box-text">EVENT #2</div>
        </a>
        <a href="#" class="box box--img-3">
            <div class="box-text">EVENT #3</div>
        </a>
        <a href="#" class="box box--img-4">
            <div class="box-text-2">TROUBLESHOOTING</div>
        </a>
    </div>
</section>`;
    var _contactPageInfo = `<section class="contact">
    <h1>Contact Us</h1>
    <div class="content-holder">
        <div class="left-side">
            <h1>getting in touch is easy</h1>
            <p>Address:</p>
            <p>1234 Some Coolplace</p>
            <p>Email Address:</p>
            <p>1234coolplace@gmail.com</p>
            <p>Telephone:</p>
            <p>(317)867-5309</p>
        </div>
        <div class="right-side">
            <p>NAME: <span>*</span></p>
            <input class="con-box-1" type="text">
            <p>EMAIL: <span>*</span></p>
            <input class="con-box-1" type="text">
            <p>MESSAGE: <span>*</span></p>
            <input class="con-box-2" type="text">
            <div class="sub-box">
                <p>send message</p>
            </div>
        </div>
    </div>
</section>`;

    

    var _getMyVariable = function (buttonID, callback) {
        console.log("model.js 6 " + buttonID);
        let newName = "_" + buttonID + "PageInfo";
        $("#content").html(eval(newName));
        // if(buttonID == "home"){
        //     $("#content").html(_homePageInfo);
        // } else {
        //     $("#content").html(_aboutPageInfo);
        // }
        if (callback) {
            callback(newName);
        }
        
        // return _myVar;
    };

    var _getMySecondVariable = function (buttonID, callback) {
        console.log("model.js 18 " + buttonID);
        let secondName = buttonID + " Callback";
        if(buttonID == "contact"){
            $("#contactPage").append(buttonID);
        } else {
            $("#productsPage").append(buttonID);
        }
        if (callback) {
          callback(secondName);  
        }
        
    }

    return {
        // getmyvariable is only public class
        getMyVariable: _getMyVariable,
        getMySecondVariable: _getMySecondVariable,
    };
})();


// use underscores before class names for private terms and use normal naming for public terms