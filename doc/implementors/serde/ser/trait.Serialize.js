(function() {var implementors = {};
implementors["bstr"] = [{"text":"impl Serialize for BStr","synthetic":false,"types":[]},{"text":"impl Serialize for BString","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;K, V, S&gt; Serialize for IndexMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Serialize + Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Serialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; Serialize for IndexSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl Serialize for Map&lt;String, Value&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for Value","synthetic":false,"types":[]},{"text":"impl Serialize for Number","synthetic":false,"types":[]}];
implementors["smartnoise_validator"] = [{"text":"impl Serialize for JSONRelease","synthetic":false,"types":[]},{"text":"impl Serialize for Accuracy","synthetic":false,"types":[]},{"text":"impl Serialize for AlgorithmInfo","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()