<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/1/9
 * Time: 11:25
 */
include 'layout_header.php';
?>





<style>
    .x-form-v label {
        display: inline-block;
        width: 160px;
        padding: 5px;
        line-height: 1.8;
        text-align: right;
        vertical-align: top;
        font-weight: bold;
        cursor: pointer;
    }
    .x-form-v label:after{
        content: ':';
    }
    .x-form-v input, .x-form-v textarea {
        width: 200px;
    }
</style>
<script type="text/javascript" src="./lib/jquery.validate.js"></script>
<script type="text/javascript" src="./lib/jquery.validate.zh-cn.js"></script>

<form action="" class="x-form-v" id="xcommentForm">
    <fieldset>
        <legend>提交comment</legend>
        <p>
            <label for="xname">name</label>
            <input type="text" id="xname" name="name">
        </p>
        <p>
            <label for="xemail">email</label>
            <input type="email" id="xemail" name="email">
        </p>
        <p>
            <label for="xurl">url</label>
            <input type="url" id="xurl" name="url">
        </p>
        <p>
            <label for="xcomment">comment</label>
            <textarea id="xcomment" name="comment"></textarea>
        </p>
        <p>
            <label for="xsubmit">comment</label>
            <input id='xsubmit' type="submit" value="Comment">
        </p>
    </fieldset>
</form>
<script>
    $.validator.setDefaults({
        submitHandler: function () {
            alert("验证通过，提交成功!");
        }
    });
    $(document).ready(function () {
        $("#xcommentForm").validate({
            rules:{
                name: {
                    required: true,
                    minlength: 6,
                    maxlength: 6
                },
                email: {
                    required: true,
                    email: true
                },
                url: {
                    required: true
                },
                comment: {
                    required: true
                }
            },
            messages:{
                name:{
                    minlength:'你名字太短了'
                }
            }
        });
    });
</script>

<form action="" class="x-form-v" id="xsignupForm">
    <p>
        <label for="xfirstname">firstname</label>
        <input type="text" id="xfirstname" name="firstname">
    </p>
    <p>
        <label for="xlastname">lastname</label>
        <input type="text" id="xlastname" name="lastname">
    </p>
    <p>
        <label for="xusername">username</label>
        <input type="text" id="xusername" name="username">
    </p>
    <p>
        <label for="xpassword">password</label>
        <input type="password" id="xpassword" name="password">
    </p>
    <p>
        <label for="xconfirm_password">confirm_password</label>
        <input type="password" id="xconfirm_password" name="confirm_password">
    </p>
    <p>
        <label for="xuseremail">useremail</label>
        <input type="email" id="xuseremail" name="useremail">
    </p>
    <p>
        <label for="xcheckbox">checkbox</label>
        <input type="checkbox" id="xcheckbox" name="checkbox">
    </p>
    <p>
        <label for="xmessage">message</label>
        <textarea id="xmessage" name="xmessage"></textarea>
    </p>
    <p>
        <label for="xfirstname">firstname</label>
        <input type="checkbox" id="xcheckbox" name="checkbox">
    </p>
    <p>
        <label for="xfirstname">firstname</label>
        <input type="checkbox" id="xcheckbox" name="checkbox">
    </p>
    <p>
        <label for="xfirstname">firstname</label>
        <input id="xsignup" type="submit" name="signup" value="Signup">
    </p>
</form>
<script>
    $.validator.setDefaults({
        submitHandler: function () {
            alert("验证通过，提交成功!");
        }
    });

    $(document).ready(function () {
        $("#xsignupForm").validate({
            rules:{
                name: {
                    required: true,
                    minlength: 6
                },
                email: {
                    required: true,
                    email: true
                },
                url: {
                    required: true
                },
                comment: {
                    required: true
                }
            },
            messages:{
                name:{
                    minlength:'你名字太短了'
                }
            }
        });
    });
</script>



<form class="cmxform" id="commentForm" method="get" action="" novalidate="novalidate">
    <fieldset>
        <legend>Please provide your name, email address (won't be published) and a comment</legend>
        <p>
            <label for="cname">Name (required, at least 2 characters)</label>
            <input id="cname" name="name" minlength="2" type="text" required="" aria-required="true" class="valid" aria-invalid="false">
        </p>
        <p>
            <label for="cemail">E-Mail (required)</label>
            <input id="cemail" type="email" name="email" required="" aria-required="true" class="valid" aria-invalid="false"><label id="cemail-error" class="error" for="cemail" style="display: none;"></label>
        </p>
        <p>
            <label for="curl">URL (optional)</label>
            <input id="curl" type="url" name="url" class="valid">
        </p>
        <p>
            <label for="ccomment">Your comment (required)</label>
            <textarea id="ccomment" name="comment" required="" aria-required="true" class="valid" aria-invalid="false"></textarea><label id="ccomment-error" class="error" for="ccomment" style="display: none;"></label>
        </p>
        <p>
            <input class="submit" type="submit" value="Submit">
        </p>
    </fieldset>
</form>

<form class="cmxform" id="signupForm" method="get" action="" novalidate="novalidate">
    <fieldset>
        <legend>Validating a complete form</legend>
        <p>
            <label for="firstname">Firstname</label>
            <input id="firstname" name="firstname" type="text" aria-required="true" class="valid" aria-invalid="false">
        </p>
        <p>
            <label for="lastname">Lastname</label>
            <input id="lastname" name="lastname" type="text" aria-required="true" class="valid" aria-invalid="false">
        </p>
        <p>
            <label for="username">Username</label>
            <input id="username" name="username" type="text" aria-required="true" class="valid" aria-invalid="false">
        </p>
        <p>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" aria-required="true" class="valid validate-equalTo-blur" aria-invalid="false"><label id="password-error" class="error" for="password" style="display: none;"></label>
        </p>
        <p>
            <label for="confirm_password">Confirm password</label>
            <input id="confirm_password" name="confirm_password" type="password" aria-required="true" class="error" aria-invalid="true"><label id="confirm_password-error" class="error" for="confirm_password">Pleaseenter the same password as above</label>
        </p>
        <p>
            <label for="email">Email</label>
            <input id="email" name="email" type="email">
        </p>
        <p>
            <label for="agree">Please agree to our policy</label>
            <input type="checkbox" class="checkbox" id="agree" name="agree">
        </p>
        <p>
            <label for="newsletter">I'd like to receive the newsletter</label>
            <input type="checkbox" class="checkbox" id="newsletter" name="newsletter">
        </p>
        <fieldset id="newsletter_topics" class="gray">
            <legend>Topics (select at least two) - note: would be hidden when newsletter isn't selected, but is visible here for the demo
            </legend>
            <label for="topic_marketflash">
                <input type="checkbox" id="topic_marketflash" value="marketflash" name="topic" disabled="disabled">Marketflash
            </label>
            <label for="topic_fuzz">
                <input type="checkbox" id="topic_fuzz" value="fuzz" name="topic" disabled="disabled">Latest fuzz
            </label>
            <label for="topic_digester">
                <input type="checkbox" id="topic_digester" value="digester" name="topic" disabled="disabled">Mailing list digester
            </label>
            <label for="topic" class="error">Please select at least two topics you'd like to receive.</label>
        </fieldset>
        <p>
            <input class="submit" type="submit" value="Submit">
        </p>
    </fieldset>
</form>

<script>
    $.validator.setDefaults({
        submitHandler: function () {
            alert("验证通过，提交成功!");
        }
    });

    $().ready(function () {
        // validate the comment form when it is submitted
        $("#commentForm").validate();

        // validate signup form on keyup and submit
        $("#signupForm").validate({
            rules: {
                firstname: "required",
                lastname: "required",
                username: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                topic: {
                    required: "#newsletter:checked",
                    minlength: 2
                },
                agree: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long",
                    equalTo: "Please enter the same password as above"
                },
                email: "Please enter a valid email address",
                agree: "Please accept our policy"
            }
        });

        $("#commentForm").validate({
            invalidHandler: function(event, validator) {
                // 'this' refers to the form
                var errors = validator.numberOfInvalids();
                if (errors) {
                    var message = errors == 1
                        ? 'You missed 1 field. It has been highlighted'
                        : 'You missed ' + errors + ' fields. They have been highlighted';
                    $("div.error span").html(message);
                    $("div.error").show();
                } else {
                    $("div.error").hide();
                }
            }
        });

        // propose username by combining first- and lastname
        $("#username").focus(function () {
            var firstname = $("#firstname").val();
            var lastname = $("#lastname").val();
            if (firstname && lastname && !this.value) {
                this.value = firstname + "." + lastname;
            }
        });

        //code to hide topic selection, disable for demo
        var newsletter = $("#newsletter");
        // newsletter topics are optional, hide at first
        var inital = newsletter.is(":checked");
        var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
        var topicInputs = topics.find("input").attr("disabled", !inital);
        // show when newsletter is checked
        newsletter.click(function () {
            topics[this.checked ? "removeClass" : "addClass"]("gray");
            topicInputs.attr("disabled", !this.checked);
        });
    });
</script>


<?php
include 'layout_footer.php';
?>
