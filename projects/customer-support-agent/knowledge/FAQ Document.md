# FAQ Document for Oct 29: Customer Support

[**What is a Genesis organization?	1**](#what-is-a-genesis-organization?)

[**What objects does a Genesis org map to?	2**](#what-objects-does-a-genesis-org-map-to?)

[**What is the difference between Genesis vs Superhuman?	2**](#what-is-the-difference-between-genesis-vs-superhuman?)

[**What is Nomos?	2**](#what-is-nomos?)

[**When are Genesis orgs created?	2**](#when-are-genesis-orgs-created?)

[**What is the ATC page?	2**](#what-is-the-atc-page?)

[**What are Grammarly SKU tiers?	2**](#what-are-grammarly-sku-tiers?)

[**What are Coda SKU tiers?	2**](#what-are-coda-sku-tiers?)

[**What are Superhuman Mail tiers?	3**](#what-are-superhuman-mail-tiers?)

[**What are Genesis Bundle or Superhuman Bundle or Bundle tiers and what do they contain?	3**](#what-are-genesis-bundle-or-superhuman-bundle-or-bundle-tiers-and-what-do-they-contain?)

[**What is the difference between Mail and Superhuman Mail?	3**](#what-is-the-difference-between-mail-and-superhuman-mail?)

[**What is Unified Login?	4**](#what-is-unified-login?)

[**What is the Bridge Service?	4**](#what-is-the-bridge-service?)

[**What is the Super Admin Experience?	4**](#what-is-the-super-admin-experience?)

[**Will there be any changes to the Grammarly funnel?	5**](#will-there-be-any-changes-to-the-grammarly-funnel?)

[**What happens when a Grammarly user visits Superhuman.com?	6**](#what-happens-when-a-grammarly-user-visits-superhuman.com?)

[**What happens when a Grammarly user visits Coda.io or Superhuman Mail funnel?	7**](#what-happens-when-a-grammarly-user-visits-coda.io-or-superhuman-mail-funnel?)

[**What happens when a new user signs up on Superhuman.com?	7**](#what-happens-when-a-new-user-signs-up-on-superhuman.com?)

[**What happens when a Superhuman (also known as Genesis, Bundle) customer goes to Grammarly, Coda or Mail checkout funnels?	7**](#what-happens-when-a-superhuman-\(also-known-as-genesis,-bundle\)-customer-goes-to-grammarly,-coda-or-mail-checkout-funnels?)

[**Is anything changing for Coda only customers?	7**](#is-anything-changing-for-coda-only-customers?)

[**What happens when a Coda customer goes to Superhuman, Grammarly or Mail checkout funnels?	7**](#what-happens-when-a-coda-customer-goes-to-superhuman,-grammarly-or-mail-checkout-funnels?)

[**Is anything changing for Mail-only customers?	8**](#is-anything-changing-for-mail-only-customers?)

[**What happens when a Mail customer goes to Superhuman, Grammarly or Coda checkout funnels	8**](#what-happens-when-a-mail-customer-goes-to-superhuman,-grammarly-or-coda-checkout-funnels)

[**Will Superhuman offer Discounts, Trials, True Ups & Frozen Subscriptions?	8**](#will-superhuman-offer-discounts,-trials,-true-ups-&-frozen-subscriptions?)

##### 

##### **What is a Genesis organization?** {#what-is-a-genesis-organization?}

A Genesis org is a foundational object used to represent alacarte and bundle customers. As of Oct 29, Genesis orgs will only support Genesis Free, Genesis Pro and Genesis Business SKUs. In the future, we expect Genesis orgs to support all à la carte and bundle (Superhuman) SKUs. 

##### **What objects does a Genesis org map to?** {#what-objects-does-a-genesis-org-map-to?}

A Genesis org is connected to a Coda workspace, may or may not be connected to a Grammarly Institution and may or may not be connected to a Superhuman Mail team. 

1. A Genesis org is connected to a Grammarly Institution when the org is paid.   
2. The billing or SKU tier or the Genesis org is the same as the Coda workspace its attached to. For eg: if a Genesis org is at Superhuman Pro, the Coda Workspace its attached to is also at the Pro tier.

You can read more about Genesis organizations [here](https://coda.io/d/Product-Integration-PI-Program-go-pi_d1hBQhbsxee/Object-Hierarchy-Catalyst_suJxFsZo#_luZDv7Yk).

##### **What is the difference between Genesis vs Superhuman?** {#what-is-the-difference-between-genesis-vs-superhuman?}

Genesis was a code name for the combined company before the name Superhuman was decided.

##### **What is Nomos?** {#what-is-nomos?}

Nomos is the name of the backend service that enables Genesis orgs

##### **When are Genesis orgs created?** {#when-are-genesis-orgs-created?}

Genesis organizations are created for any new signup or login on Superhuman.com. They are also created when a Grammarly Free user converts to Grammarly Pro after Oct 29\. Genesis orgs are not created when a Grammarly Enterprise, Coda Enterprise or Superhuman Mail Enterprise user signs in on [Superhuman.com](http://Superhuman.com). You can read more about when Genesis orgs are created [here](https://coda.io/d/_d1hBQhbsxee/Genesis-orgs-and-Bridge-correlation_suoRLqlO#_lumFuXMS).

##### **What is the ATC page?** {#what-is-the-atc-page?}

ATC page aka Air Traffic Control page is a landing page that customers see when they signup on Superhuman.com after Oct 29\. This page has tiles for Grammaely, Coda, Go and Mail products. From this page you can also access Super Admin Experience.

##### **What are Grammarly SKU tiers?** {#what-are-grammarly-sku-tiers?}

Free, Pro, GB Teams (legacy tier), GB Enterprise, Premium (legacy tier). Free and Pro are currently self service tiers. GB Teams and Premium and legacy tiers. GB Teams and Pro can have both self service and Managed customers on it. GB Enterprise is Managed only.

##### **What are Coda SKU tiers?** {#what-are-coda-sku-tiers?}

Coda workspaces can be on one of the following tiers: Free, Pro, Team, Enterprise  
When a Coda Workspace upgrades to the Enterprise tier a new object is created called Coda organization which is the parent object for the said Coda Enterprise workspace.   
All Coda tiers are available self service. Enterprise is also offered via the Managed channel.

##### **What are Superhuman Mail tiers?** {#what-are-superhuman-mail-tiers?}

Superhuman Mail has the following tiers: Starter, Business and Enterprise. Starter and Business are self service tiers. Managed only offers the Enterprise tier.

##### **What are Genesis Bundle or Superhuman Bundle or Bundle tiers and what do they contain?** {#what-are-genesis-bundle-or-superhuman-bundle-or-bundle-tiers-and-what-do-they-contain?}

The bundle is referred to as multiple names internally: Bundle, Genesis Bundle, Superhuman Bundle.  
It should only be referred as Superhuman Bundle externally.  
It has the following tiers for Oct 29 launch  
Superhuman Free \= Grammarly Free and Coda Free, available via self service  
Superhuman Pro \= Grammarly Pro and Coda Pro, available via self service  
Superhuman Business \= Grammarly Pro, Coda Team, Mail Business, available via self service  
Superhuman Enterprise \= Grammarly Enterprise, Coda Enterprise, Mail Enterprise, available via Managed sales only. Please note this is an early SKU that will require à la carte manual provisioning for the respective products. Sales teams will not be actively selling Superhuman Enterprise on 10/29 and for a period of time that follows (exact duration TBD). Sales teams will be trained on messaging on the rebrand and product direction so they can field questions from their customers. [Superhuman.com](http://Superhuman.com) pricing page will have a new CTA like "Be the first to know". Leads who visit the pricing page and click the CTA will be asked to fill out a form. Based on the information they provide, the MarOps team would route these leads to a Sales Manager on Kourtney's team, a Product leader such as Luke, or place them into a different TBD nurture flow.  
If in this initial conversation we discover that the lead wants to purchase one or more products and are able to qualify them, we would then route the lead to the appropriate AE to follow through.

##### **What is the difference between Mail and Superhuman Mail?** {#what-is-the-difference-between-mail-and-superhuman-mail?}

They are the same product and sometimes referred as different names. Superhuman Mail is often used to refer to the Mail product specifically while Superhuman is the new name of the combined company as well as will be used to refer to the bundle offerings like Superhuman Free, Superhuman Pro, Superhuman Business, Superhuman Enterprise

##### **What is Unified Login?** {#what-is-unified-login?}

Unified login is built by the Identity team. It allows users to switch between Hub and Spokes seemlessly without requiring another login. Hub is Superhuman.com, Spokes are Coda, Grammarly, Mail.  
You can read more about the Unified Login [here](https://coda.io/d/Identity-Integration_dLszqDgvi-_/Unified-Login-for-Genesis_su1TE2el#_lubTtwsL).

##### **What is the Bridge Service?** {#what-is-the-bridge-service?}

Bridge Service is a backend service that correlates the user between multiple products via the correlation id. A bridge service record is created based on a few triggers. Current list of triggers include

1. New signup on Superhuman.com. Creates a bridge service record, creates a Grammarly user and a Coda user and connects them via the Bridge correlation id  
2. When a new AI editor document is created by either Grammarly Free or a Paid user. A Coda user is created in this case and a bridge service record is created.  
3. When Go Agent Bench is launched for a user, a Coda user is created and a bridge service record is created.   
4. When a user purchases the Business bundle a bridge service record is created or updated. A new Mail user is created and added to the Bridge Service record that should also have Grammarly and Coda user ids

You can read more about the Bridge Service [here](https://coda.io/d/Identity-Integration_dLszqDgvi-_/Unified-Login-for-Genesis_su1TE2el#_lubTtwsL).

##### **What is the Super Admin Experience?** {#what-is-the-super-admin-experience?}

Super Admin Experience is the Admin Hub for the bundle. Its only available to Bundle users via the Settings CTA on the ATC page. The Super Admin Experience has a Members page that allows Bundle admins to do the following

1. An admin on a Free account can add other users. All users that are added will be Free Admins since we want any user on Free account to be able to upgrade the account to a Paid tier.  
2. An admin on a Superhuman Pro or Business account can add other users as either Free or Paid. A paid account can also have multiple admins but all admins need to have a paid seat.  
3. An account that has all Free users is sometimes referred to as a Free Team.  
4. An account that has both Free and Paid users is sometimes referred to as a Hybrid Team.  
5. An account that has all Paid users is referred to as a Paid team.   
6. Regular users who are not admins are unable to downgrade or upgrade themselves, they do not have access to the Super Admin experience  
7. Superhuman paid subscriptions are managed via Grammarly’s Account Hub on [https://account.grammarly.com/subscription](https://account.grammarly.com/subscription)  
8. Any admin can downgrade any other admin to a free seat.  
   1. They must first switch that member to a user, then to a free seat   
   2. Any admin can remove another admin, but cannot remove themselves.  
   3. Admins can downgrade themselves to a non admin if there are other admins on the account  
9. Downgrading an admin to a non admin user role, requires first switching their role to a paid user, then changing them to free.  
10. When a paid user is downgraded to free, a seat opens up, allowing someone else to be added. If the admin wants to reduce the number of billed seats, they must do so via the [https://account.grammarly.com/subscription](https://account.grammarly.com/subscription) page.  
11. The last user on an account must remain an admin. They cannot be removed, downgraded, or have their role or seat type changed.

##### **Will there be any changes to the Grammarly funnel?** {#will-there-be-any-changes-to-the-grammarly-funnel?}

No changes expected in the Grammarly acquisition, onboarding or conversion funnels.

1. New Grammarly signups will continue to happen on [Grammarly.com](http://Grammarly.com). These users will not get Genesis organizations in the backend and will be the same as existing Grammarly Free customers.  
2. All new Grammarly Pro conversions post Oct 29, will happen on Superhuman Pro in the backend. Customers will continue to see Grammarly Pro in the uphooks and the checkout flow. When a customer purchases Grammarly Pro   
   1. a new Genesis organization will be created for them in the background  
   2. They will also get a Coda Pro workspace that is attached to the Genesis organization.   
   3. They will also get a Grammarly Institution that is also attached to their Genesis organization  
   4. They will continue to manage all of their settings in the Grammarly Account Hub  
3. Grammarly Premium, GB Teams, GB Enterprise, and existing Grammarly Pro customers who purchase Grammarly Pro before Oct 29 will have no changes to their experience.   
4. Grammarly Trials and Discounts will continue to work as before. Any new Grammarly customers using a Free-\> Pro discount can continue using that despite the underlying SKU being Superhuman Pro. For more details, click [here](https://coda.io/d/Product-Integration-PI-Program-go-pi_d1hBQhbsxee/Discounts-Trials-True-Ups-Frozen-Subsriptions-for-Genesis_suc0RWc_?utm_source=slack&utm_content=comment_notification#_tubbFo7x/r1&columnId=c-3YZTF6i7Jj).  
5. Grammarly True Ups for existing paid customers will continue to work as is. Any new Grammarly Pro customers post Oct 29 will not offer True Ups for now. For more details, click [here](https://coda.io/d/Product-Integration-PI-Program-go-pi_d1hBQhbsxee/Discounts-Trials-True-Ups-Frozen-Subsriptions-for-Genesis_suc0RWc_?utm_source=slack&utm_content=comment_notification#_tubbFo7x/r1&columnId=c-3YZTF6i7Jj).  
6. No changes for Grammarly join flows for either existing or new users. All join flows work as before like Auto Join, Request to Join and admin-initiated email invites. For more details, click [here](https://coda.io/d/Product-Integration-PI-Program-go-pi_d1hBQhbsxee/Discounts-Trials-True-Ups-Frozen-Subsriptions-for-Genesis_suc0RWc_?utm_source=slack&utm_content=comment_notification#_tubbFo7x/r1&columnId=c-3YZTF6i7Jj).

##### **What happens when a Grammarly user visits [Superhuman.com](http://Superhuman.com)?** {#what-happens-when-a-grammarly-user-visits-superhuman.com?}

1. When a Grammarly Free user visits [Superhuman.com](http://Superhuman.com), they can login with their existing Grammarly credentials. This is enabled by Unified Login. A Genesis organization is created for them and they get a Coda Free Workspace attached to their Genesis organization. A Grammarly Free user can purchase either Superhuman Pro or Superhuman Business.  
2. When a Grammarly Pro user visits [Superhuman.com](http://Superhuman.com), they can login with their existing Grammarly credentials. This is enabled by Unified Login. A Genesis organization is not created for them unless they go through the Grammarly Pro \-\> Superhuman Pro conversion flow.  
3. When a Grammarly Pro admin visits [Superhuman.com](http://Superhuman.com) pricing page and clicks on Superhuman Pro plan, they are first redirected to login, they can login with their existing Grammarly credentials. Post login they are taken to a Grammarly Pro \-\> Superhuman Pro conversion page. Once they confirm a few things happen  
   1. A Genesis organization is created for them  
   2. A Coda Pro workspace is created for them and attached to their Genesis organization  
   3. All of their Grammarly Pro team members are added to their Coda Pro workspace too  
   4. Their Billing SKU changes from Grammarly Pro to Superhuman Pro  
   5. They are redirected to the ATC page  
   6. Note: A Grammarly Pro user who is not an admin cannot go through the Grammarly Pro \-\> Superhuman Pro conversion flow and will receive an error to reach out to their admin to initiate the conversion.  
4. When a Grammarly Pro admin or user visits [Superhuman.com](http://Superhuman.com) pricing page and clicks on Superhuman Business plan, they are first redirected to login, they can login with their existing Grammarly credentials. Post login they are in Superhuman Business checkout funnel but receive an error when they try to complete checkout since Grammarly Pro or Superhuman Pro to Superhuman Business upgrades are not supported for Oct 29\. These customers will be asked to reach out to customer support who will cancel their current Pro subscription and then instruct them to purchase Superhuman Business from [Superhuman.com](http://Superhuman.com).   
5. All other Grammarly users on SKUs like Premium, GB Teams, GB Enterprise   
   1. Can log in to [Superhuman.com](http://Superhuman.com) with their existing Grammarly credentials but they will not get a Genesis organization in the backend since these SKUs are still not supported for Genesis orgs  
   2. Similarly when such customers go to [Superhuman.com](http://Superhuman.com) pricing page, login and encounter the Grammarly Pro \-\> Superhuman Pro conversion page, they will receive an error there.

##### **What happens when a Grammarly user visits [Coda.io](http://Coda.io) or Superhuman Mail funnel?** {#what-happens-when-a-grammarly-user-visits-coda.io-or-superhuman-mail-funnel?}

Grammarly free or paid can purchase Coda and Mail ala carte plans in addition to their existing Grammarly subscription. For more details on which SKU upgrades or downgrades are allowed, click [here](https://www.figma.com/board/8mcxvcpfVNYsNcqRhLkvI6/SKU-Upgrade-Downgrade-paths?node-id=0-1&t=2oSet1bDve28WmHg-0).

##### **What happens when a new user signs up on [Superhuman.com](http://Superhuman.com)?** {#what-happens-when-a-new-user-signs-up-on-superhuman.com?}

A new user can signup on [Superhuman.com](http://Superhuman.com). They will get a Genesis org in the backend with a Grammarly Free account and  Coda Free workspace where they are the only member to begin with. Post signup they will land on the ATC page. They will also have access to the Super Admin Experience where they will be the only Admin. Such a user can upgrade to Superhuman Pro or Superhuman Business via the self-serve checkout experience. A Superhuman Pro user cannot upgrade to Superhuman Business for Oct 29 and will be asked to reach out to customer support who will downgrade this customer to Free and advise them to upgrade to Superhuman Business via the self serve checkout experience. 

##### **What happens when a Superhuman (also known as Genesis, Bundle) customer goes to Grammarly, Coda or Mail checkout funnels?** {#what-happens-when-a-superhuman-(also-known-as-genesis,-bundle)-customer-goes-to-grammarly,-coda-or-mail-checkout-funnels?}

1. Superhuman Free or Pro users can purchase Mail Starter or Mail Business via the self serve Mail checkout experience  
2. Superhuman customers on Free, Pro or Business can purchase Mail Enterprise via reaching out to the Sales team  
3. Superhuman Free customers can purchase Grammarly Pro via the Grammarly checkout experience  
4. Superhuman Free, Pro or Business customers can purchase any Coda plan (Free, Pro, Team or Enterprise)

For more details on which SKU upgrades or downgrades are allowed, click [here](https://www.figma.com/board/8mcxvcpfVNYsNcqRhLkvI6/SKU-Upgrade-Downgrade-paths?node-id=0-1&t=2oSet1bDve28WmHg-0).

##### **Is anything changing for Coda only customers?** {#is-anything-changing-for-coda-only-customers?}

No, Coda customers continue to signup on [Coda.io](http://Coda.io) and purchase Coda alacarte plans just as pre Oct 29\. Also Coda join flows continue to be the same.

##### **What happens when a Coda customer goes to Superhuman, Grammarly or Mail checkout funnels?** {#what-happens-when-a-coda-customer-goes-to-superhuman,-grammarly-or-mail-checkout-funnels?}

1. Coda customers except Coda Enterprise can purchase any Superhuman plan (Free, Pro, Business) via the self service flow.   
2. Coda Enterprise customers are not allowed to purchase any Superhuman bundle and will be directed to contact customer support. Customer Support in this case will loop in the RevOrg team for this account to engage with the customer.  
3. Coda customers except Coda Enterprise can purchase any Grammarly plan (Free, Pro) via the self-service flow  
4. Coda Enterprise customers can access Grammarly Free via [Grammarly.com](http://Grammarly.com) but are not allowed to purchase Grammarly Pro and will be directed to contact customer support. Customer Support in this case will loop in the RevOrg team for this account to engage with the customer.  
5.  Coda customers on any SKU are allowed to purchase any Mail plan (Starter, Business, Enterprise)

For more details on which SKU upgrades or downgrades are allowed, click [here](https://www.figma.com/board/8mcxvcpfVNYsNcqRhLkvI6/SKU-Upgrade-Downgrade-paths?node-id=0-1&t=2oSet1bDve28WmHg-0).

##### **Is anything changing for Mail-only customers?** {#is-anything-changing-for-mail-only-customers?}

To be defined

##### **What happens when a Mail customer goes to Superhuman, Grammarly or Coda checkout funnels** {#what-happens-when-a-mail-customer-goes-to-superhuman,-grammarly-or-coda-checkout-funnels}

1. Mail Starter and Business customers can get either Superhuman Free or Pro plans  
2. Mail Starter or Business customers cannot get Superhuman Business and will be directed to contact customer support. Customer Support in this case will let the customer know that such an upgrade is not possible at this time but will be available in the future.  
3. Mail Enterprise customers are not allowed to get any Superhuman plans (Free, Pro, Business) and will be directed to contact customer support. Customer Support in this case will loop in the RevOrg team for this account to engage with the customer.  
4. Mail customers on any ala carte Mail SKU can get Superhuman Enterprise via contacting Sales  
5. Mail Starter, Business or Enterprise customers can access Grammarly Free via [Grammarly.com](http://Grammarly.com)  
6. Mail Starter, Business can also upgrade to Grammarly Pro as an additional subscription  
7. Mail Starter, Business or Enterprise customers can get Grammarly Enterprise via reaching out to Sales  
8. Mail Enterprise customers cannot get Grammarly Pro and will see an error in the checkout funnel and will be directed to contact customer support. Customer Support in this case will loop in the RevOrg team for this account to engage with the customer.  
9. Mail customers on any SKU Starter, Business or Enterprise can purchase any Coda ala carte SKU via the coda funnel

For more details on which SKU upgrades or downgrades are allowed, click [here](https://www.figma.com/board/8mcxvcpfVNYsNcqRhLkvI6/SKU-Upgrade-Downgrade-paths?node-id=0-1&t=2oSet1bDve28WmHg-0).

##### **Will Superhuman offer Discounts, Trials, True Ups & Frozen Subscriptions?** {#will-superhuman-offer-discounts,-trials,-true-ups-&-frozen-subscriptions?}

For Oct 29

1. Discounts: No support  
2. Trials: No support  
3. True Ups: No support  
4. Frozen Subscription: No support

Some of these features will be supported post Oct 29\. For more details on these features, click [here](https://coda.io/d/Product-Integration-PI-Program-go-pi_d1hBQhbsxee/Discounts-Trials-True-Ups-Frozen-Subsriptions-for-Genesis_suc0RWc_?utm_source=slack&utm_content=comment_notification#_lu6aNxed).

