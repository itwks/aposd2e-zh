import{_ as e,o as t,c as i,e as n}from"./app-Cc8loZcl.js";const o={},a=n('<h1 id="chapter-9-better-together-or-better-apart" tabindex="-1"><a class="header-anchor" href="#chapter-9-better-together-or-better-apart"><span>Chapter 9 Better Together Or Better Apart?</span></a></h1><p>One of the most fundamental questions in software design is this: given two pieces of functionality, should they be implemented together in the same place, or should their implementations be separated? This question applies at all levels in a system, such as functions, methods, classes, and services. For example, should buffering be included in the class that provides stream-oriented file I/O, or should it be in a separate class? Should the parsing of an HTTP request be implemented entirely in one method, or should it be divided among multiple methods (or even multiple classes)? This chapter discusses the factors to consider when making these decisions. Some of these factors have already been discussed in previous chapters, but they will be revisited here for completeness.</p><p>When deciding whether to combine or separate, the goal is to reduce the complexity of the system as a whole and improve its modularity. It might appear that the best way to achieve this goal is to divide the system into a large number of small components: the smaller the components, the simpler each individual component is likely to be. However, the act of subdividing creates additional complexity that was not present before subdivision:</p><ul><li>Some complexity comes just from the number of components: the more components, the harder to keep track of them all and the harder to find a desired component within the large collection. Subdivision usually results in more interfaces, and every new interface adds complexity.</li><li>Subdivision can result in additional code to manage the components. For example, a piece of code that used a single object before subdivision might now have to manage multiple objects.</li><li>Subdivision creates separation: the subdivided components will be farther apart than they were before subdivision. For example, methods that were together in a single class before subdivision may be in different classes after subdivision, and possibly in different files. Separation makes it harder for developers to see the components at the same time, or even to be aware of their existence. If the components are truly independent, then separation is good: it allows the developer to focus on a single component at a time, without being distracted by the other components. On the other hand, if there are dependencies between the components, then separation is bad: developers will end up flipping back and forth between the components. Even worse, they may not be aware of the dependencies, which can lead to bugs.</li><li>Subdivision can result in duplication: code that was present in a single instance before subdivision may need to be present in each of the subdivided components.</li></ul><p>Bringing pieces of code together is most beneficial if they are closely related. If the pieces are unrelated, they are probably better off apart. Here are a few indications that two pieces of code are related:</p><ul><li>They share information; for example, both pieces of code might depend on the syntax of a particular type of document.</li><li>They are used together: anyone using one of the pieces of code is likely to use the other as well. This form of relationship is only compelling if it is bidirectional. As a counter-example, a disk block cache will almost always involve a hash table, but hash tables can be used in many situations that don’t involve block caches; thus, these modules should be separate.</li><li>They overlap conceptually, in that there is a simple higher-level category that includes both of the pieces of code. For example, searching for a substring and case conversion both fall under the category of string manipulation; flow control and reliable delivery both fall under the category of network communication.</li><li>It is hard to understand one of the pieces of code without looking at the other.</li></ul><p>The rest of this chapter uses more specific rules as well as examples to show when it makes sense to bring pieces of code together and when it makes sense to separate them.</p><h2 id="_9-1-bring-together-if-information-is-shared" tabindex="-1"><a class="header-anchor" href="#_9-1-bring-together-if-information-is-shared"><span>9.1 Bring together if information is shared</span></a></h2><h2 id="_9-2-bring-together-if-it-will-simplify-the-interface" tabindex="-1"><a class="header-anchor" href="#_9-2-bring-together-if-it-will-simplify-the-interface"><span>9.2 Bring together if it will simplify the interface</span></a></h2><h2 id="_9-3-bring-together-to-eliminate-duplication" tabindex="-1"><a class="header-anchor" href="#_9-3-bring-together-to-eliminate-duplication"><span>9.3 Bring together to eliminate duplication</span></a></h2><h2 id="_9-4-separate-general-purpose-and-special-purpose-code" tabindex="-1"><a class="header-anchor" href="#_9-4-separate-general-purpose-and-special-purpose-code"><span>9.4 Separate general-purpose and special-purpose code</span></a></h2><h2 id="_9-5-example-insertion-cursor-and-selection" tabindex="-1"><a class="header-anchor" href="#_9-5-example-insertion-cursor-and-selection"><span>9.5 Example: insertion cursor and selection</span></a></h2><h2 id="_9-6-example-separate-class-for-logging" tabindex="-1"><a class="header-anchor" href="#_9-6-example-separate-class-for-logging"><span>9.6 Example: separate class for logging</span></a></h2><h2 id="_9-7-splitting-and-joining-methods" tabindex="-1"><a class="header-anchor" href="#_9-7-splitting-and-joining-methods"><span>9.7 Splitting and joining methods</span></a></h2><h2 id="_9-8-a-different-opinion-clean-code" tabindex="-1"><a class="header-anchor" href="#_9-8-a-different-opinion-clean-code"><span>9.8 A different opinion: Clean Code</span></a></h2><p>In the book Clean Code1, Robert Martin argues that functions should be broken up based on length alone. He says that functions should be extremely short, and that even 10 lines is too long:</p><blockquote><p>The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that....Blocks within if statements, else statements, while statements, and so on should be one line long. Probably that line should be a function call.... This also implies that functions should not be large enough to hold nested structures. Therefore, the indent level of a function should not be greater than one or two. This, of course, makes the functions easier to read and understand.</p></blockquote><p>I agree that shorter functions are generally easier to understand than longer ones. However, once a function gets down to a few dozen lines, further reductions in size are unlikely to have much impact on readability. A more important issue is: does breaking up a function reduce the overall complexity of the system? In other words, is it easier to read several short functions and understand how they work together than it is to read one larger function? More functions means more interfaces to document and learn. If functions are made too small, they lose their independence, resulting in conjoined functions that must be read and understood together. When this happens, then it’s better to keep the larger function, so all of the related code is one place. Depth is more important than length: first make functions deep, then try to make them short enough to be easily read. Don’t sacrifice depth for length.</p><h2 id="_9-9-conclusion" tabindex="-1"><a class="header-anchor" href="#_9-9-conclusion"><span>9.9 Conclusion</span></a></h2><p>The decision to split or join modules should be based on complexity. Pick the structure that results in the best information hiding, the fewest dependencies, and the deepest interfaces.</p><p>1Clean Code, Robert C. Martin, Pearson Education, Inc., Boston, MA 2009</p>',21),s=[a];function r(l,h){return t(),i("div",null,s)}const c=e(o,[["render",r],["__file","ch09.html.vue"]]),p=JSON.parse('{"path":"/en/ch09.html","title":"Chapter 9 Better Together Or Better Apart?","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"9.1 Bring together if information is shared","slug":"_9-1-bring-together-if-information-is-shared","link":"#_9-1-bring-together-if-information-is-shared","children":[]},{"level":2,"title":"9.2 Bring together if it will simplify the interface","slug":"_9-2-bring-together-if-it-will-simplify-the-interface","link":"#_9-2-bring-together-if-it-will-simplify-the-interface","children":[]},{"level":2,"title":"9.3 Bring together to eliminate duplication","slug":"_9-3-bring-together-to-eliminate-duplication","link":"#_9-3-bring-together-to-eliminate-duplication","children":[]},{"level":2,"title":"9.4 Separate general-purpose and special-purpose code","slug":"_9-4-separate-general-purpose-and-special-purpose-code","link":"#_9-4-separate-general-purpose-and-special-purpose-code","children":[]},{"level":2,"title":"9.5 Example: insertion cursor and selection","slug":"_9-5-example-insertion-cursor-and-selection","link":"#_9-5-example-insertion-cursor-and-selection","children":[]},{"level":2,"title":"9.6 Example: separate class for logging","slug":"_9-6-example-separate-class-for-logging","link":"#_9-6-example-separate-class-for-logging","children":[]},{"level":2,"title":"9.7 Splitting and joining methods","slug":"_9-7-splitting-and-joining-methods","link":"#_9-7-splitting-and-joining-methods","children":[]},{"level":2,"title":"9.8 A different opinion: Clean Code","slug":"_9-8-a-different-opinion-clean-code","link":"#_9-8-a-different-opinion-clean-code","children":[]},{"level":2,"title":"9.9 Conclusion","slug":"_9-9-conclusion","link":"#_9-9-conclusion","children":[]}],"git":{"updatedTime":1711083169000},"filePathRelative":"en/ch09.md"}');export{c as comp,p as data};