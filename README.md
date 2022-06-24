# Online Curriculum Vitae

My online Curriculum Vitae website. A simple static web with HTML5 + CSS3 + JavaScript.

This new repository has been made to allow for more modular development as content is updated, rather than having a single gigantic HTML
file that became increasingly large and unmanageable.

Because HTML does not natively support splitting into multiple files, this new version of the repository uses
the [sergey](https://sergey.cool/) tool to generate the HTML file, as it allows splitting HTML files into multiple files and allows HTML
content to be organised in a more modular way.

The media player was built using [AetherPlayer](https://github.com/peinhu/AetherPlayer) with some modifications to achieve what I want on my
website.

On the visual aspect, I have followed and modified the free tutorials from [MDB](https://mdbootstrap.com/education/bootstrap/).

To achieve the smooth rainbow color degradations on my sound spectrum, I have taken the code from this post
of [KrazyDad](https://krazydad.com/tutorials/makecolors.php).

As some browsers have problems with the **WebAudio API** and are changing the policy on the **autoplay** attribute, I am
using [Bowser](https://github.com/lancedikson/bowser) to detect the browser and act accordingly to allow autoplay or play more than one
song.

# License

MIT License

Copyright (c) 2022 MinionAttack

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.