const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-description">
          <h1>
            Feel Great.
            <br />
            Body and Mind.
          </h1>
          <h4>
            Choose from hundreds of workouts, healthy recipes, relaxing
            meditations, and expert articles, for a whole body and mind approach
            to feeling great.
          </h4>
          <a href="">Join now</a>
        </div>
        <div className="banner-images">
          <img src="/images/test.jpeg" alt="" />
          <img src="/images/test.jpeg" alt="" />
          <img src="/images/test.jpeg" alt="" />
          <img src="/images/test.jpeg" alt="" />
          <img src="/images/test.jpeg" alt="" />
          <img src="/images/test.jpeg" alt="" />
          <img src="/images/test.jpeg" alt="" />
          <img src="/images/test.jpeg" alt="" />
          <img src="/images/test.jpeg" alt="" />
          
        </div>
      </div>
      <div className="main">
        <div id="ad1" className="ads">
          <div className="description">
            <h3>
              <strong>FB </strong>
              <span>Plus</span> Passes
            </h3>
            <p>
              Passes give you full access to everything FB Plus has to offer,
              without a long-term subscription.
            </p>
            <a href="">Buy Now</a>
          </div>

          <img src="/images/img1.jpg" alt="" />
        </div>
        <div id="ad2" className="ads">
          <div className="description">
            <h2>Workout Videos</h2>
            <p>
              Exercise with certified personal trainers whether you’re at home
              or on the road.
            </p>
            <a href="">Find a workout</a>
          </div>

          <img src="/images/img2.jpg" alt="" />
        </div>

        <div id="ad3" className="ads">
          <div className="description">
            <h2>Programs</h2>
            <p>
              Professionally designed programs take the guesswork out of
              exercising.
            </p>
            <a href="">Browse all Programs</a>
          </div>
          <img src="/images/img4.jpg" alt="" />
        </div>
        <div id="ad4" className="ads">
          <div className="description">
            <h2>FB Merch</h2>
            <p>
              We have new shirts, hoodies, water bottles and more in our updated
              Fitness Blender Tee Spring store.
            </p>
            <a href="">Shop Now</a>
          </div>
          <img src="/images/img3.jpg" alt="" />
        </div>
        <div id="ad5" className="ads">
          <div className="description">
            <h2>Wellness Articles</h2>
            <p>
              Research-backed articles to help you care for your body and mind.
            </p>
            <a href="">Learn from Experts</a>
          </div>
          <img src="/images/img5.jpg" alt="" />
        </div>
        <div id="ad6" className="ads">
          <div className="description">
            <h2>Healthy Recipes</h2>
            <p>
              Fuel your day with recipes by Registered Dietitians and
              professional chefs.
            </p>
            <a href="">Learn a Recipe</a>
          </div>
          <img src="/images/img6.jpg" alt="" />
        </div>
        <div id="community" className="ads">
          <div className="description">
            <h2>Supportive Community</h2>
            <p>
              Stay motivated and engaged with a little help from a supportive
              community of other members.
            </p>
            <a href="">Become a Member</a>
          </div>
          <img src="/images/img7.jpg" alt="" />
        </div>
      </div>

      <h2>Not sure where to start?</h2>
      <p>
        Programs offer day-to-day guidance on an interactive calendar to keep
        you on track.
      </p>
      <div className="scnd">
        <div className="scnd-ads">
          <h3>Perfect for Beginners</h3>
          <a href="">
            <div className="img">
              <img src="/images/scndimg1.jpg" alt="" />
            </div>
            {/* <div className="scnd-description">  */}
            <h6>4 WEEK PROGRAM - 34 MIN/DAY</h6>
            <h5>
              FB Low Impact Round 2- Build Muscle & Burn Fat - 40 Minutes or
              Less
            </h5>
            <p className="price">$19.99</p>
            {/* <!-- </div> --> */}
          </a>
        </div>
        <div className="scnd-ads">
          <h3>You Choose</h3>
          <a href="">
            <div className="img">
              <img src="/images/scndimg2.jpg" alt="" />
            </div>
            {/* <!-- <div className="scnd-description"> --> */}
            <h6>4 WEEK PROGRAM - 38 MIN/DAY</h6>
            <h5>
              FB Blend- Burn Fat, Build Muscles, Tone; 35 or 55 Minutes a Day -
              40 Minutes or Less
            </h5>
            <p className="price">$19.99</p>
            {/* <!-- </div> --> */}
          </a>
        </div>
        <div className="scnd-ads">
          <h3>Short on Time?</h3>
          <a href="">
            <div className="img">
              <img src="/images/scndimg3.jpg" alt="" />
            </div>
            {/* <!-- <div className="scnd-description"> --> */}
            <h6>4 WEEK PROGRAM - 30 MIN/DAY</h6>
            <h5>FB 30 -Fat Loss Program for Busy People (Round 4)</h5>
            <p className="price">$19.99</p>
            {/* <!-- </div> --> */}
          </a>
        </div>
        <div className="scnd-ads">
          <h3>No Equipments Necessary</h3>
          <a href="">
            <div className="img">
              <img src="/images/scndimg4.jpg" alt="" />
            </div>
            {/* <!-- <div className="scnd-description"> --> */}
            <h6>4 WEEK PROGRAM - 40 MIN/DAY</h6>
            <h5>FB Body Weight - Bodyweight only Fat Loss Program</h5>
            <p className="price">$19.99</p>
          </a>
        </div>
      </div>
      <div className="view-programs">
        <a href="">View All Programs</a>
      </div>
    </div>
  );
};

export default Home;
