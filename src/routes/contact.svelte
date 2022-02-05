<script context="module">
    import { browser, dev } from "$app/env";

    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    // export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;

    // since there's no dynamic data here, we can prerender
    // it so that it gets served as a static asset in prod
    export const prerender = true;
</script>

<svelte:head>
    <title>Contact Us</title>
    <meta
        name="description"
        content="We understand the importance of approaching each work integrally
    and believe in the power of simple and easy communication. Feel
    free to contact us for any questions or if you need any help or
    services ! Please provide a detailed explanation of your
    problem."
    />
</svelte:head>

<section class="top-sec">
    <div class="txt-container">
        <h4 class="title">Contact Us</h4>
    </div>
</section>
<section class="contact-sec">
    <div class="contact-container">
        <div class="txt-container">
            <h5 class="title"><i class="fab fa-telegram-plane" />Contact Us</h5>
            <p class="txt">
                We understand the importance of approaching each work integrally
                and believe in the power of simple and easy communication. Feel
                free to contact us for any questions or if you need any help or
                services ! Please provide a detailed explanation of your
                problem.
            </p>
        </div>
        <div class="form-container">
            <form
                action="mailto:gnopaexcel@yahoo.fr"
                class="contact-form"
                method="POST"
                enctype="multipart/form-data"
            >
                <div class="rowe rowe-1">
                    <div class="colu-1 colu">
                        <label for="name">name</label>
                        <input
                            type="text"
                            name="name"
                            id=""
                            class="name-in in"
                            required
                        />
                    </div>
                    <div class="colu-2 colu">
                        <label for="email">email</label>
                        <input
                            type="email"
                            name="email"
                            id=""
                            class="email-in in"
                            required
                        />
                    </div>
                </div>
                <div class="rowe rowe-2">
                    <div class="colu-1 colu">
                        <label for="phone">phone</label>
                        <input
                            type="tel"
                            name="phone"
                            id=""
                            class="tel-in in"
                        />
                    </div>
                    <div class="colu-2 colu">
                        <label for="subject">subject</label>
                        <input
                            type="text"
                            name="subject"
                            id=""
                            class="subj-in in"
                        />
                    </div>
                </div>
                <div class="rowe rowe-3">
                    <label for="message">Your Message</label>
                    <textarea
                        name="message"
                        id=""
                        class="message-in in"
                        required
                    />
                </div>
                <button type="submit" class="submit-btn">submit</button>
            </form>
        </div>
    </div>
</section>

<style lang="scss">
    @import "../styles.scss";
    section {
        width: 100%;
        background-color: white;
        margin-bottom: 2px;
        padding: 30px 40px;
        @include mqx(900px) {
            padding: 10px;
        }
    }

    .top-sec {
        width: 100%;
        background-color: white;
        margin-bottom: 2px;
        .txt-container {
            margin-bottom: 10px;
            .title {
                font-size: 1rem;
                color: var(--text-color);
            }
        }
    }

    .contact-container {
        .txt-container {
            .title {
                font-size: 1rem;
                margin-bottom: 10px;
                i {
                    margin-right: 10px;
                }
            }
            .txt {
                font-size: 0.9rem;
                margin-bottom: 20px;
            }
        }
        .form-container {
            width: 100%;
            .contact-form {
                width: 100%;
                .in {
                    border: 1px solid var(--grayish);
                    padding: 0 10px;
                }
                // .in:focus-visible {
                //     border: 1px solid black;
                // }
                .rowe {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    .colu {
                        width: 48%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        label {
                            margin-bottom: 5px;
                            text-transform: capitalize;
                        }
                        .in {
                            width: 100%;
                            height: 35px;

                            margin-bottom: 20px;
                        }
                    }
                    @include mqx(900px) {
                        flex-direction: column;
                        .colu {
                            width: 100%;
                        }
                    }
                }
                .rowe-3 {
                    display: flex;
                    flex-direction: column;
                    .message-in {
                        width: 100%;
                        height: 150px;
                        margin-bottom: 20px;
                    }
                }
                .submit-btn {
                    width: 100%;
                    color: white;
                    padding: 10px 0;
                    background-color: var(--bluish);
                    font-weight: 600;
                    text-transform: capitalize;
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>
