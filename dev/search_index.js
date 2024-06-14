var documenterSearchIndex = {"docs":
[{"location":"#DistributionTools.jl-Documentation","page":"DistributionTools.jl Documentation","title":"DistributionTools.jl Documentation","text":"","category":"section"},{"location":"","page":"DistributionTools.jl Documentation","title":"DistributionTools.jl Documentation","text":"This package is not registered, to install use Pkg.add(\"https://github.com/dfok/DistributionTools.jl)","category":"page"},{"location":"","page":"DistributionTools.jl Documentation","title":"DistributionTools.jl Documentation","text":"DistributionTools provides some functions to work with a few multivariate distributions from Distributions.jl. The main additions are functions to obtain marginal and conditional distributions.","category":"page"},{"location":"","page":"DistributionTools.jl Documentation","title":"DistributionTools.jl Documentation","text":"It also provides a function to obtain the cdf of a mixture of bivariate normals. For this GaussianDistributions.jl is used.","category":"page"},{"location":"","page":"DistributionTools.jl Documentation","title":"DistributionTools.jl Documentation","text":"","category":"page"},{"location":"#Obtaining-marginal-distributions","page":"DistributionTools.jl Documentation","title":"Obtaining marginal distributions","text":"","category":"section"},{"location":"","page":"DistributionTools.jl Documentation","title":"DistributionTools.jl Documentation","text":"marginal","category":"page"},{"location":"#DistributionTools.marginal","page":"DistributionTools.jl Documentation","title":"DistributionTools.marginal","text":"marginal(d::MvNormal, ind::Int)\n\nReturn the marginal distribution of element ind from the multivariate normal distribution d\n\n\n\n\n\nmarginal(d::MvLogNormal, ind::Int)\n\nReturn the marginal distribution of element ind from the multivariate log normal distribution d\n\n\n\n\n\nmarginal(d::MvNormal, ind::Array{Int,1})\n\nReturn the marginal distribution of elements ind (vector) from the multivariate normal distribution d\n\n\n\n\n\nmarginal(d::MvLogNormal, ind::Array{Int,1})\n\nReturn the marginal distribution of elements ind (vector) from the multivariate log normal distribution d\n\n\n\n\n\nmarginal(d::MixtureModel, ind::Int)\n\nReturn the marginal distribution of element ind from a multivariate mixture distribution d\n\n\n\n\n\nmarginal(d::MixtureModel, ind::Array{Int,1})\n\nReturn the marginal distribution of elements ind (vector) from a multivariate mixture distribution d\n\n\n\n\n\nmarginal(d::MvTDist, ind::Int)\n\nReturn the marginal distribution of element ind from a multivariate t distribution d\n\n\n\n\n\nmarginal(d::MvTDist, ind::Array{Int,1})\n\nReturn the marginal distribution of elements ind (vector) from a multivariate t distribution d\n\n\n\n\n\n","category":"function"},{"location":"#Obtaining-conditional-distributions","page":"DistributionTools.jl Documentation","title":"Obtaining conditional distributions","text":"","category":"section"},{"location":"","page":"DistributionTools.jl Documentation","title":"DistributionTools.jl Documentation","text":"conditional","category":"page"},{"location":"#DistributionTools.conditional","page":"DistributionTools.jl Documentation","title":"DistributionTools.conditional","text":"conditional(d::MultivariateDistribution, cond::Int, xval::T) where T<:Real\n\nReturn conditional distribution when conditioning element cond of distribution d to value xval\n\n\n\n\n\nconditional(d::MvLogNormal, cond::Array{Int,1}, xval::Array{<:Real,1}) where T<:Real\n\nReturn conditional distribution when conditioning element vector cond of LogNormal distribution d to value xval\n\n\n\n\n\nconditional(d::MvNormal, cond::Array{Int,1}, xval::Array{<:Real,1}) where T<:Real\n\nReturns conditional distribution when conditioning element vector cond of MvNormal distribution d to value xval\n\n\n\n\n\nconditional(d::MvTDist, cond::Array{Int,1}, xval::Array{<:Real,1})\n\nObtain the conditional distribution of a multivariate T distribution \n\nSee Peng Ding (2016) \"On the Conditional Distribution of the Multivariate t-Distribution\", The American Statistician, 70:3, 293-295, DOI: 10.1080/00031305.2016.1164756\n\n\n\n\n\nconditional(d::MixtureModel{Multivariate,Continuous,<:Distribution,<:DiscreteNonParametric}, cond::Array{Int,1}, xval::Array{<:Real,1})\n\nReturn the conditional distribution when conditioning element vector cond of Continuous Mixture distribution d to values xval\n\nDrops elements from the mixture where the conditional mixture probability < eps()\n\n\n\n\n\n","category":"function"},{"location":"#Other-helper-functions","page":"DistributionTools.jl Documentation","title":"Other helper functions","text":"","category":"section"},{"location":"","page":"DistributionTools.jl Documentation","title":"DistributionTools.jl Documentation","text":"cor2var\nvar2cor\nmy_quantile\nquantile\ncdf","category":"page"},{"location":"#DistributionTools.cor2var","page":"DistributionTools.jl Documentation","title":"DistributionTools.cor2var","text":"cor2var(cor, var)\n\nTransform a correlation + vector of variances to a 2x2 variance matrix\n\n\n\n\n\n","category":"function"},{"location":"#DistributionTools.var2cor","page":"DistributionTools.jl Documentation","title":"DistributionTools.var2cor","text":"var2cor(m)]\n\nTransform a variance matrix to a correlation matrix\n\n\n\n\n\n","category":"function"},{"location":"#DistributionTools.my_quantile","page":"DistributionTools.jl Documentation","title":"DistributionTools.my_quantile","text":"my_quantile(d::UnivariateMixture{Continuous}, p::Real)\n\nReturn the p quantile of the univariate mixture distribution d\n\nAdapted from quantile() from Distributions.jl, original has a problem with the bisect algorithm. \n\nThe initial interval does not contain solution, solved by ±0.000001\n\n\n\n\n\n","category":"function"},{"location":"#Statistics.quantile","page":"DistributionTools.jl Documentation","title":"Statistics.quantile","text":"quantile(d::MvTDist, p)\n\nReturn the p quantile of a 1-dimensional MvTDist (errors if dimension>1)\n\n\n\n\n\n","category":"function"},{"location":"#Distributions.cdf","page":"DistributionTools.jl Documentation","title":"Distributions.cdf","text":"cdf(d::MixtureModel{Multivariate,Continuous, <:MvNormal, <:DiscreteNonParametric}, x::Vector{T}) where T<:Real\n\nReturn cdf of mixture of multivariate normals evaluated at x \n\nThrows error when dimension of d ≠ 2\n\n\n\n\n\n","category":"function"}]
}
