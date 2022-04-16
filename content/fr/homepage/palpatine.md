---
title: Palpatine
description: ''
position: 6
category: Homepage
---

## PALPATINE1
<nuxt-img src="/homepage/palptatine1.jpg" class="light-img" width="680" height="310" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/palptatine1.jpg" class="dark-img" width="680" height="310" loading="lazy"></nuxt-img>

### HTML / CSS - PALPATINE1

<code-group>
  <code-block label="HTML" active>

  ```html
  <!-- ### Bloc PALPATINE ### - Titre de la méca SXX -->

<section class="palpatine-sxx-montitre">
    <div class="palpatine-sxx-montitre-right">
        <div class="palpatine-sxx-montitre-right__col1">
            <figure>
                <a href="$url('Search-Show', 'cgid', 'FR0172')$">
                    <picture>
                        <source media="(min-width: 800px)"
                            srcset="./images/PE22_S06_co-creation-1.jpg?$staticlink$">
                        <source media="(max-width: 799px)"
                            srcset="./images/PE22_S06_co-creation-1-mob.jpg?$staticlink$">
                        <img src="./images/PE22_S06_co-creation-1.jpg?$staticlink$" loading="lazy"
                            alt="Titre de l'image">
                    </picture>
                </a>
            </figure>
        </div>
        <div class="palpatine-sxx-montitre-left">
            <!-- <div class="palpatine-sxx-montitre-left-container"> -->
            <div class="
              palpatine-sxx-montitre-left-container
              asset_animation--text
              fade-from-right
              in-view
            " style="flex-direction: column">
                <div class="palpatine-sxx-montitre-left__event">
                    <span class="palpatine-sxx-montitre-left__event--bold">
                        <h2>Co-création</h2>
                    </span>
                </div>
                <div class="palpatine-sxx-montitre-left__title">
                    <h3>Deux robes <br>
                        magiques !</h3>
                </div>
                <div class="palpatine-sxx-montitre-left__content">
                    Nous avons fait découvrir la modélisation 3D à deux instagrameuses accros de mode. Résultat ? Deux sublimes robes co-crées via notre outil 3D…  On parie que vous allez adorer les porter !
                </div>
                <div class="palpatine-sxx-montitre-left__box">
                    <a href="$url('Search-Show', 'cgid', 'FR0172')$" class="palpatine-sxx-montitre-left__btn">Je veux en savoir plus</a>
                </div>
            </div>
        </div>
        <div class="palpatine-sxx-montitre-right__col2">
            <figure>
                <a href="$url('Search-Show', 'cgid', 'FR0172')$">
                    <img src="./images/PE22_S06_co-creation-2.jpg?$staticlink$" loading="lazy"
                        alt="Titre de l'image" />
                </a>
            </figure>
        </div>
    </div>
</section>

<!-- ### Bloc PALPATINE ### - Titre de la méca SXX -->
  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc PALPATINE ### - Titre de la méca SXX /////////

    .palpatine-sxx-montitre {
        display: flex;
        clear: both;
        background: #9a4c81;

        margin-top: 50px !important;

        @include for960 {
            margin-top: 30px !important;
        }

        @include for800 {
            flex-direction: column-reverse;
        }

        @include for540 {
            padding: 0;
            background: #9a4c81;
            flex-direction: column-reverse;
        }

        @include for520 {
            flex-direction: column !important;
        }

        &-left {
            flex: 1 39%;
            display: flex;
            flex-direction: column;
            background: #9a4c81;

            justify-content: center;

            @include for960 {
                flex: 1 50%;
                padding-top: 15px !important;
            }

            @include for540 {
                padding-top: 0 !important;
            }

            @include for520 {
                width: 100% !important;
                padding-right: 0px;
            }

            &-container {
                margin: 0 !important;
                padding-left: 32px;

                @include for800 {
                    margin-top: 20px !important;
                    padding: 0 20px;
                }

                @include for520 {
                    margin-top: 0 !important;
                    padding-top: 0 !important;
                    padding: 30px !important;
                }
            }

            &__event {
                @include event(#ffffff);

                @include for900 {
                    font-size: 1.2em;
                }

                @include for540 {
                    color: #ffffff;
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

                @include for540 {
                    padding-bottom: 5px !important;
                }
            }

            &__content {
                @include content(#ffffff);

                @include for1050 {
                    .dnonemob {
                    }
                }

                @include for540 {
                    max-width: 300px !important;;
                }

                @include for520 {
                    margin: 0 auto !important;
                }
            }

            &__box {
                display: flex;
                margin: 0;

                @include for960 {
                    padding-bottom: 20px;
                }

                @include for540 {
                    padding-bottom: 0 !important;
                }

                @include for520 {
                    flex-direction: column;
                    width: 100%;
                }
            }

            &__box2 {
                display: flex;
                margin: 0;
                margin-top: 15px;

                @include for520 {
                    margin-top: 0;
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

        &-right {
            display: flex;
            justify-content: space-around;
            flex: 1 57%;
            padding-right: 0px;
            background: #9a4c81;

            @include for960 {
                flex: 1 42%;
                padding-right: 0;
                display: flex;
                flex-direction: column;
            }

            &__col1 {
                overflow: hidden;
                display: block;

                @include for960 {
                    padding-right: 0px;
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
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                overflow: hidden;
                margin: 0 !important;

                @include for960 {
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
        }
    }

    ///////// ### Bloc PALPATINE ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>