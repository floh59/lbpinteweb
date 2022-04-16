---
title: C3PO
description: ''
position: 5
category: Homepage
---

## C3PO1
<nuxt-img src="/homepage/c3po1.jpg" class="light-img" width="680" height="350" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/c3po1.jpg" class="dark-img" width="680" height="350" loading="lazy"></nuxt-img>

### HTML / CSS - C3PO1

<code-group>
  <code-block label="HTML" active>

  ```html
  <!-- ### Bloc C3PO ### - Titre de la méca SXX -->

		<section class="c3po-sxx-montitre">
			<div class="c3po-sxx-montitre-right">
				<div class="c3po-sxx-montitre-right__col2">
					<figure class="c3po-sxx-montitre-center--img1">
						<a href="$url('Search-Show', 'cgid', 'FR0184')$">
							<img src="./images/1.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image" />
						</a>
					</figure>
				</div>
			</div>
			<div class="c3po-sxx-montitre-center">
				<figure class="c3po-sxx-montitre-center--img2">
					<a href="$url('Search-Show', 'cgid', 'FR0184')$">
						<img src="./images/2.jpg?$staticlink$" loading="lazy"
							alt="Titre de l'image" />
					</a>
				</figure>
				<figure class="c3po-sxx-montitre-center--img3">
					<a href="$url('Search-Show', 'cgid', 'FR0184')$">
						<img src="./images/3.jpg?$staticlink$" loading="lazy"
							alt="Titre de l'image" />
					</a>
				</figure>
			</div>
			<div class="onlymobile">
				<figure>
					<a href="$url('Search-Show', 'cgid', 'FR0272')$">
						<picture>
							<img src="./images/1-mob.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image" />
						</picture>
					</a>
				</figure>
			</div>
			<div class="c3po-sxx-montitre-left">
				<div id="cover"></div>
				<!-- <div class="c3po-sxx-montitre-left-container"> -->
				<div class="
          c3po-sxx-montitre-left-container
          asset_animation--text
          fade-from-left
          in-view
        " style="flex-direction: column">

				

					<div class="c3po-sxx-montitre-left__event">
						<span class="c3po-sxx-montitre-left__event--bold">
							<h2>Tendance mode</h2>
						</span>
					</div>
					<div class="c3po-sxx-montitre-left__title">
						<h3>Douceur <br>
							de vivre</h3>
					</div>
					<div class="c3po-sxx-montitre-left__content">
						Nos stylistes sont unanimes : les teintes de vert et de bleu vont conquérir tous les coeurs
						cette saison. Découvrez LA sélection pour adopter ces nuances Mode dans vos prochains looks. 
					</div>
					<div class="c3po-sxx-montitre-left__box">
						<a href="$url('Search-Show', 'cgid', 'FR0184')$" class="c3po-sxx-montitre-left__btn">Je
							craque</a>
					</div>
				</div>
			</div>
		</section>

		<!-- ### Bloc C3PO ### - Titre de la méca SXX -->
  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc C3PO ### - Titre de la méca SXX /////////

    .c3po-sxx-montitre {
        display: flex;
        clear: both;
        background: #ffffff;

        margin-top: 50px !important;

        @include for960 {
            margin-top: 30px !important;
        }

        @include for800 {
            flex-direction: column;
            background: #bbd1c2;
        }

        @include for540 {
            padding: 0;
            background: #ffffff;
        }

        &-left {
            flex: 1 360px;
            display: flex;
            flex-direction: column;
            background: #bbd1c2;

            padding-right: 20px;
            justify-content: center;

            #cover {
                background-color: #bbd1c2;
                background-attachment: fixed;
                background-clip: border-box;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                z-index: 0;
                position: absolute;
                width: 265px !important;
                right: -6%;
                left: 0;
                height: 374px;

                @include for800 {
                    display: none;
                }
            }

            @include for960 {
                flex: 1 50%;
            }

            @include for520 {
                width: 100% !important;
                padding-right: 0px;
            }

            &-container {
                margin: 0 !important;
                padding-left: 32px;
                padding-top: 38px;
                padding-bottom: 43px;

                @include for800 {
                    margin-top: 20px !important;
                    //padding-left: 0px;
                    padding: 0 20px;
                }

                @include for520 {
                    margin-top: 20px !important;
                    //padding-left: 0px;
                    padding: 0;
                }
            }

            &__event {
                @include event;

                @include for900 {
                    font-size: 1.2em;
                }

                @include for540 {
                    color: #000000;
                }

                @include for520 {
                    font-size: 1.2em;
                    max-width: 300px;
                    margin: 0 auto !important;
                    width: 300px !important;
                    max-width: 100%;
                }

                &--bold {
                    font-weight: bold;
                    padding-top: 20px;

                    img {
                        float: left;
                    }
                }
            }

            &__title {
                @include title(#ffffff);

                img {
                    margin: 0 !important;

                    @include for520 {
                        max-width: 200px !important;
                    }
                }
            }

            &__content {
                @include content;

                p {
                    text-align: right;
                    font-size: 0.7em;
                }

                @include for960 {
                    padding: 20px 0 25px 0;
                }

                @include for520 {
                    display: none;
                }
            }

            &__box {
                display: flex;
                margin: 0;

                @include for800 {
                    padding-bottom: 25px;
                }

                @include for520 {
                    flex-direction: column;
                    width: 100%;
                    padding-bottom: 25px;
                }
            }

            &__btn {
                @include btn-white;
                width: 300px !important;
                margin-right: 15px !important;

                @include for700 {
                    font-size: 0.8em;
                }

                @include for540 {
                    font-size: 0.9em;
                    margin-bottom: 6px !important;
                }

                @include for520 {
                    max-width: 100%;
                    width: 300px !important;
                    margin: 0 auto !important;
                    margin-bottom: 10px !important;
                }
            }

            @include for520 {
                order: 2;
            }
        }

        &-center {
            display: flex;
            flex-direction: column;
            flex: 1 377px;
            padding-left: 20px;
            padding-right: 0;

            @include for800 {
                padding-left: 0 !important;
                display: none;
            }

           

            &--img1,
            &--img2,
            &--img3 {
                z-index: 5;
                position: relative;

                @include for800 {
                    display: none;
                }
            }

            &--img3 {
                a {
                    margin: 30px 0 !important;

                    img {
                        margin: 0;
                    }
                }
            }
        }

        .onlymobile {
            display: none !important;

            @include for800 {
                display: block !important;
            }
        }

        &-center {
            @include for540 {
                display: none !important;
            }
            figure {
                overflow: hidden;
                a {
                    img {
                        @include zoomImgEffect;
                    }
                }
            }
        }

        &-right {
            display: flex;
            justify-content: space-around;
            flex: 1 320px;
            padding-right: 0px;
            background: #ffffff;

            @include for960 {
                flex: 1 42%;
                padding-right: 0;
            }

            &__col1 {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                overflow: hidden;
                margin: 0 !important;
                padding-left: 42px;

                @include for960 {
                    padding-right: 0px;
                    display: none;
                }

                figure {
                    overflow: hidden;
                    a {
                        img {
                            @include zoomImgEffect;
                        }
                    }
                }
            }

            &__col2 {
                overflow: hidden;
                display: block;

                @include for960 {
                    padding-left: 0px;
                }

                figure {
                    overflow: hidden;

                    a {
                        img {
                            @include zoomImgEffect;
                        }
                    }
                }
            }
        }
    }

    ///////// ### Bloc C3PO  ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>

## C3PO1B

<nuxt-img src="/homepage/c3po1b.jpg" class="light-img" width="720" height="350" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/c3po1b.jpg" class="dark-img" width="720" height="350" loading="lazy"></nuxt-img>

### HTML / CSS - C3PO1B

<code-group>
  <code-block label="HTML" active>

  ```html
  <!-- ### Bloc C3POB ### - Titre de la méca SXX -->

		<section class="c3pob-sxx-montitre">
			<div class="c3pob-sxx-montitre-left">
				<div id="cover"></div>
				<!-- <div class="c3pob-sxx-montitre-left-container"> -->
				<div class="
          c3pob-sxx-montitre-left-container
          asset_animation--text
          fade-from-right
          in-view
        " style="flex-direction: column">
					<div class="c3pob-sxx-montitre-left__event">
						<span class="c3pob-sxx-montitre-left__event--bold">
							<h2>Tendance mode</h2>
						</span>
					</div>
					<div class="c3pob-sxx-montitre-left__title">
						<h3>Douceur <br>
							de vivre</h3>
					</div>
					<div class="c3pob-sxx-montitre-left__content">
						Nos stylistes sont unanimes : les teintes de vert et de bleu vont conquérir tous les coeurs
						cette saison. Découvrez LA sélection pour adopter ces nuances Mode dans vos prochains looks.
					</div>
					<div class="c3pob-sxx-montitre-left__box">
						<a href="$url('Search-Show', 'cgid', 'FR0184')$" class="c3pob-sxx-montitre-left__btn">Je
							craque</a>
					</div>
				</div>
			</div>
			<div class="c3pob-sxx-montitre-center">
				<figure class="c3pob-sxx-montitre-center--img2">
					<a href="$url('Search-Show', 'cgid', 'FR0184')$">
						<img src="./images/PE22_S05_tendance_mode-1.jpg?$staticlink$" loading="lazy"
							alt="Titre de l'image" />
					</a>
				</figure>
				<figure class="c3pob-sxx-montitre-center--img3">
					<a href="$url('Search-Show', 'cgid', 'FR0184')$">
						<img src="./images/PE22_S05_tendance_mode-2.jpg?$staticlink$" loading="lazy"
							alt="Titre de l'image" />
					</a>
				</figure>
			</div>
			<div class="c3pob-sxx-montitre-right">
				<div class="c3pob-sxx-montitre-right__col2">
					<figure class="c3pob-sxx-montitre-center--img1">
						<a href="$url('Search-Show', 'cgid', 'FR0184')$">
							<img src="./images/PE22_S05_tendance_mode-3.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image" />
						</a>
					</figure>
				</div>
			</div>
			<div class="onlymobile">
				<figure>
					<a href="$url('Search-Show', 'cgid', 'FR0272')$">
						<picture>
							<img src="./images/PE22_S03_tendance_mode-1-mobile.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image" />
						</picture>
					</a>
				</figure>
			</div>
		</section>

		<!-- ### Bloc C3POB ### - Titre de la méca SXX -->
  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc C3POB ### - Titre de la méca SXX /////////

    .c3pob-sxx-montitre {
        display: flex;
        clear: both;
        background: #ffffff;

        margin-top: 50px !important;

        @include for960 {
            margin-top: 30px !important;
        }

        @include for800 {
            flex-direction: column;
            background: #bbd1c2;
        }

        @include for540 {
            padding: 0;
            background: #ffffff;
        }

        &-left {
            flex: 1 360px;
            display: flex;
            flex-direction: column;
            background: #bbd1c2;

            padding-right: 20px;
            justify-content: center;

            @include for960 {
                flex: 1 50%;
            }

            @include for520 {
                width: 100% !important;
                padding-right: 0px;
            }

            #cover {
                background-color: #bbd1c2;
                background-attachment: fixed;
                background-clip: border-box;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                z-index: 0;
                position: absolute;
                width: 265px !important;
                right: 7%;
                left: 0;
                height: 374px;

                @include for800 {
                    display: none;
                }
            }

            &-container {
                margin: 0 !important;
                padding-left: 32px;
                padding-top: 38px;
                padding-bottom: 43px;

                @include for800 {
                    margin-top: 20px !important;
                    //padding-left: 0px;
                    padding: 0 20px;
                }

                @include for520 {
                    margin-top: 20px !important;
                    //padding-left: 0px;
                    padding: 0;
                }
            }

            &__event {
                @include event;

                @include for900 {
                    font-size: 1.2em;
                }

                @include for540 {
                    color: #000000;
                }

                @include for520 {
                    font-size: 1.2em;
                    max-width: 300px;
                    margin: 0 auto !important;
                    width: 300px !important;
                    max-width: 100%;
                }

                &--bold {
                    font-weight: bold;
                    padding-top: 20px;

                    img {
                        float: left;
                    }
                }
            }

            &__title {
                @include title(#ffffff);

                img {
                    margin: 0 !important;

                    @include for520 {
                        max-width: 200px !important;
                    }
                }
            }

            &__content {
                @include content;

                p {
                    text-align: right;
                    font-size: 0.7em;
                }

                @include for960 {
                    padding: 20px 0 25px 0;
                }

                @include for520 {
                    display: none;
                }
            }

            &__box {
                display: flex;
                margin: 0;

                @include for800 {
                    padding-bottom: 25px;
                }

                @include for520 {
                    flex-direction: column;
                    width: 100%;
                    padding-bottom: 25px;
                }
            }

            &__btn {
                @include btn-white;
                width: 300px !important;
                margin-right: 15px !important;

                @include for700 {
                    font-size: 0.8em;
                }

                @include for540 {
                    font-size: 0.9em;
                    margin-bottom: 6px !important;
                }

                @include for520 {
                    max-width: 100%;
                    width: 300px !important;
                    margin: 0 auto !important;
                    margin-bottom: 10px !important;
                }
            }

            @include for520 {
                order: 2;
            }
        }

        &-center {
            display: flex;
            flex-direction: column;
            flex: 1 377px;
            padding-right: 22px;

            @include for800 {
                padding-left: 0 !important;
                display: none;
            }
           

            &--img1,
            &--img2,
            &--img3 {
                z-index: 5;
                position: relative;

                @include for800 {
                    display: none;
                }
            }

            &--img3 {
                a {
                    margin: 30px 0 !important;
                    display: flex;
                    justify-content: end;

                    img {
                        margin: 0;
                    }
                }
            }
        }

        .onlymobile {
            display: none !important;

            @include for800 {
                display: block !important;
            }
        }

        &-center {
            @include for540 {
                display: none !important;
            }
            figure {
                overflow: hidden;
                a {
                    img {
                        @include zoomImgEffect;
                    }
                }
            }
        }

        &-right {
            display: flex;
            justify-content: space-around;
            flex: 1 320px;
            padding-right: 0px;
            background: #ffffff;

            @include for960 {
                flex: 1 42%;
                padding-right: 0;
            }

            &__col1 {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                overflow: hidden;
                margin: 0 !important;
                padding-left: 42px;

                @include for960 {
                    padding-right: 0px;
                    display: none;
                }

                figure {
                    overflow: hidden;
                    a {
                        img {
                            @include zoomImgEffect;
                        }
                    }
                }
            }

            &__col2 {
                overflow: hidden;
                display: block;

                @include for960 {
                    padding-left: 0px;
                }

                figure {
                    overflow: hidden;

                    a {
                        img {
                            @include zoomImgEffect;
                        }
                    }
                }
            }
        }
    }

    ///////// ### Bloc C3POB  ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>