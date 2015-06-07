### Scopes, Scope Chains, Closues, and GC
- There are different types of scopes: Lexical Scope (most common), Blocked Scope, Global, `eval`, `catch`, `with`
- A var that is used from an outer scope is called to be closed over by the inner fn - a closure.  Closures are what allow callback-last mechanism in node.
- A var foo is shadowing another var foo when its in a nested fn and the other foo is in the outer fn
- GC events are thread blocking and so can cause your app to slow if you have
tons of GC event calls, since other js cannot be executed while gc is happening.
- Usually takes GC events takes less than 16ms
- Use the timeline tab in chrome dev to see gc events clean up js heap